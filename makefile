build-app:
	npm run build

clear-cloudfront-cache:
	CLOUDFRONT_DIST_IDS=$$(aws cloudfront list-distributions --query "DistributionList.Items[].Id" --output text); \
	for ID in $$CLOUDFRONT_DIST_IDS; do \
		aws cloudfront create-invalidation --distribution-id $$ID --paths "/*"; \
	done;

sync-s3-assets:
	cd build && aws s3 sync . s3://lynncottage.co.uk

deploy-changes: build-app sync-s3-assets clear-cloudfront-cache

