# Initiate Restore Object<a name="batch-ops-initiate-restore-object"></a>

You can use Amazon S3 batch operations to perform large\-scale batch operations on Amazon S3 objects\. Amazon S3 batch operations can execute a single operation on a list of Amazon S3 objects that you specify including initiating object restores from Amazon S3 Glacier\. For more information, see [Performing Batch Operations](batch-ops.md)\. 

Objects that you archive to the GLACIER or DEEP ARCHIVE storage classes are not accessible in real time\. Using the `InitiateRestore` operation in your Amazon S3 batch operations sends a restore request to S3 Glacier for each object that is specified in the manifest\. To create an Initiate Restore Object job, you must include two elements with your request:
+ **ExpirationInDays**
  + When you restore an object from S3 Glacier, the restored object is only a temporary copy, which Amazon S3 deletes after a fixed period of time\. This element specifies how long the temporary copy will remain available in Amazon S3\. After the temporary copy expires, you can only retrieve the object by restoring it from S3 Glacier again\. For more information about object restoration, see [Restoring Archived Objects](restoring-objects.md)\.
+ **GlacierJobTier**
  + Amazon S3 can restore objects from S3 Glacier according to three different retrieval tiers: Expedited, Standard, and Bulk\. Amazon S3 batch operations support only the Standard and Bulk tiers\. For more information about S3 Glacier retrieval tiers, see [Archive Retrieval Options](restoring-objects.md#restoring-objects-retrieval-options)\. For more information about pricing for each tier, see the "Retrieval pricing" section at [Amazon S3 Glacier pricing](https://aws.amazon.com/glacier/pricing/)\.

**Important**  
The Initiate Restore Object job only initiates the request to restore objects\. Amazon S3 batch operations report the job as complete for each object after the request has been initiated for that object\. Amazon S3 doesn't update the job or otherwise notify you when the objects have been restored\. However, you can use event notifications to receive notifications when the objects are available in Amazon S3\. For more information, see [ Configuring Amazon S3 Event Notifications](NotificationHowTo.md)\.

## Overlapping Restores<a name="batch-ops-initiate-restore-object-in-progress"></a>

If your Initiate Restore Object job tries to restore an object that is already in the process of being restored, Amazon S3 batch operations will behave as follows:

The restore operation succeeds for the object if either of the following conditions are true:
+ Compared to the restoration request already in progress, this job's `ExpirationInDays` is the same and `GlacierJobTier` is faster\.
+ The previous restoration request has already completed and the object is currently available\. In this case, Amazon S3 batch operations update the expiration date of the restored object to match the `ExpirationInDays` specified in this job\.

The restore operation fails for the object if any of the following conditions are true:
+ The restoration request already in progress has not yet completed and the restoration duration for this job \(specified by `ExpirationInDays`\) is different than the restoration duration that is specified in the in\-progress restoration request\.
+ The restoration tier for this job \(specified by `GlacierJobTier`\) is the same or slower than the restoration tier that is specified in the in\-progress restoration request\.

## Limitations<a name="batch-ops-initiate-restore-object-limitations"></a>

Initiate Restore Object jobs have the following limitations:
+ You must create an Initiate Restore Object job in the same Region as the archived objects\.
+ Amazon S3 batch operations do not support S3 Glacier SELECT\.
+ Amazon S3 batch operations do not support the Expedited retrieval tier\.