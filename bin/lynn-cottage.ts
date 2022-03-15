#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { lynnCottageStack } from '../lib/lynn-cottage-stack';

const app = new cdk.App();
const envUS  = { 
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1' // Note the region is hard coded to us-east-1 as this is the required region for CloudFront certificates
};

new lynnCottageStack(app, 'lynnCottageApp', { env: envUS, description:'Multi Domain Stack'});
