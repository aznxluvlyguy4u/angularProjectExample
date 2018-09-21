const gulp = require("gulp");
const env = require('gulp-env');
const s3 = require('gulp-s3-upload')(awsConfig);
const staging_nsfo_website_bucket = process.env.S3_BUCKET_STAGING;
const production_nsfo_website_bucket = process.env.S3_BUCKET_PRODUCTION;
const public_read = 'public-read';
const retry_count = 5;

/**
 * Load environment variables from JSON File.
 */

env({
    file: 'env.json'
});


/**
 * Initialize AWS Config
 */

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    useIAM: true
};

/**
 * Task to deploy build files directly to AWS S3 hosted website Bucket.
 */

gulp.task('deploy:staging', function() {
	return gulp.src(['dist/**/*'])
		.pipe(s3({
			Bucket: staging_nsfo_website_bucket,
			ACL:    public_read
		}, {
			maxRetries: retry_count
		}))
		;
});

gulp.task('deploy:prod', function() {
	return gulp.src(['dist/**/*'])
		.pipe(s3({
			Bucket: production_nsfo_website_bucket,
			ACL:    public_read
		}, {
			maxRetries: retry_count
		}))
		;
});
