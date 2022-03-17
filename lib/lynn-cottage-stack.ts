import { Stack, App, StackProps } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { OriginAccessIdentity, CloudFrontWebDistribution, ViewerCertificate } from '@aws-cdk/aws-cloudfront';
import { HttpsRedirect } from '@aws-cdk/aws-route53-patterns'
import { CertificateValidation, DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';

const websiteDistSourcePath = './build';

export class lynnCottageStack extends Stack {
  public constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
 
    const primaryDomain = 'lynncottage.co.uk'
    const wwwDomain = `www.${primaryDomain}`

    // Create a private S3 bucket
    const sourceBucket = new Bucket(this, 'cdk-mypoc-website-s3', {
      websiteIndexDocument: 'index.html',
      bucketName: primaryDomain,
    });

    // Create access identity, and grant read access only
    const originAccessIdentity = new OriginAccessIdentity(this, 'OIA', {
      comment: 'Setup access from CloudFront to the bucket ( read )'
    });
    sourceBucket.grantRead(originAccessIdentity);

    // Deploy the source code from the /app folder
    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset(websiteDistSourcePath)],
      destinationBucket: sourceBucket
    });

    // Using a Zone that already exists so we can use a lookup on the Zone name.
    const zone = HostedZone.fromLookup(this, 'BaseZone', {
      domainName: primaryDomain
    });

    // Request the TLS certificate
    const certificate = new DnsValidatedCertificate(this, 'SiteCert', {
      domainName: primaryDomain,
      hostedZone: zone,
      validation: CertificateValidation.fromDns(zone)
    });

    const viewerCertificate = ViewerCertificate.fromAcmCertificate(certificate, {
      aliases: [primaryDomain],
    });

    // Create the CloudFront Distribution
    const cfDist = new CloudFrontWebDistribution(this, 'CfDist', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: sourceBucket,
            originAccessIdentity: originAccessIdentity
          },
          behaviors: [
            { isDefaultBehavior: true }
          ]
        }
      ],
      viewerCertificate,
    });
  
    // Create DNS entry in route53 as an alias to the new CloudFront Distribution.
    new ARecord(this, 'AliasRecord', {
      zone,
      recordName: primaryDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(cfDist)),
    });

    new HttpsRedirect(this, 'Redirect', {
      zone,
      recordNames: [wwwDomain],
      targetDomain: primaryDomain,
    });
  }
}