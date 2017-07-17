mailprotector.com
=======

The public website for Mailprotector.


# How to deploy to S3

From the root of this project, run the following commands.

To build the lates version of the site:

`jekyll build`

To sync those new changes with the S3 bucket:

`aws s3 sync _site s3://mailprotector.com`

That command will sync and changed files with the S3 bucket. There is a CDN setup
for mailprotector.com so changes will show up after the cache has refreshed.

To view the changes directly on S3 and bypass the CDN cache, go to:

http://mailprotector.com.s3-website-us-east-1.amazonaws.com/
