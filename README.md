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
for mailprotector.com so changes will show up after the cache has refreshed. To view the changes directly on S3 and bypass the CDN cache, go to:

http://mailprotector.com.s3-website-us-east-1.amazonaws.com/


TO DEPLOY CHANGES IMMEDIATELY: To update the production environment more quickly you can invalidate the folder path using Cyberduck (or a similar product). Right click the folder containing the files you want to update, select "Info", then scroll to the bottom of the window and click the "Invalidate" button.

To invalidate the CloudFront CDN:

Set the path to the part of the site you want to refresh. Use '/' if you want to refresh the whole thing.

aws cloudfront create-invalidation --distribution-id E1RXSAYM783DKX --paths "/videos"
