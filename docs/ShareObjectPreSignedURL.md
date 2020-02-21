# Share an Object with Others<a name="ShareObjectPreSignedURL"></a>

**Topics**
+ [Generate a Presigned Object URL using AWS Explorer for Visual Studio](ShareObjectPreSignedURLVSExplorer.md)
+ [Generate a presigned Object URL Using the AWS SDK for Java](ShareObjectPreSignedURLJavaSDK.md)
+ [Generate a Presigned Object URL Using AWS SDK for \.NET](ShareObjectPreSignedURLDotNetSDK.md)
+ [Generate a Presigned Object URL Using AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/s3/presign.html)

All objects by default are private\. Only the object owner has permission to access these objects\. However, the object owner can optionally share objects with others by creating a presigned URL, using their own security credentials, to grant time\-limited permission to download the objects\. 

When you create a presigned URL for your object, you must provide your security credentials, specify a bucket name, an object key, specify the HTTP method \(GET to download the object\) and expiration date and time\. The presigned URLs are valid only for the specified duration\. 

Anyone who receives the presigned URL can then access the object\. For example, if you have a video in your bucket and both the bucket and the object are private, you can share the video with others by generating a presigned URL\. 

**Note**  
Anyone with valid security credentials can create a presigned URL\. However, in order to successfully access an object, the presigned URL must be created by someone who has permission to perform the operation that the presigned URL is based upon\.
The credentials that you can use to create a presigned URL include:  
IAM instance profile: Valid up to 6 hours
AWS Security Token Service : Valid up to 36 hours when signed with permanent credentials, such as the credentials of the AWS account root user or an IAM user
IAM user: Valid up to 7 days when using AWS Signature Version 4  
To create a presigned URL that's valid for up to 7 days, first designate IAM user credentials \(the access key and secret access key\) to the SDK that you're using\. Then, generate a presigned URL using AWS Signature Version 4\.
If you created a presigned URL using a temporary token, then the URL expires when the token expires, even if the URL was created with a later expiration time\.

You can generate presigned URL programmatically using the AWS SDK for Java and \.NET\. 