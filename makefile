build-app:
	npm run build

clear-cloudfront-cache:
	CLOUDFRONT_DIST_ID=$$(aws cloudfront list-distributions --query "DistributionList.Items[0].Id" | tr -d '"'); \
	aws cloudfront create-invalidation --distribution-id $$CLOUDFRONT_DIST_ID --paths "/*";

sync-s3-assets:
	cd build && aws s3 sync . s3://wildcard-lynncottage.co.uk

deploy-changes: build-app sync-s3-assets clear-cloudfront-cache
