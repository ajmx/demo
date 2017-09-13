import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    demo_name = 'demo.ajumo.co.uk'
    build_name = 'demo.build.ajumo.co.uk'
    title = 'Deployment finished'
    message = '{0} for demo application. Deployed from {1} to {2}.'
    build_location = {'bucketName': build_name, 'objectKey':'demo_ajumo_build.zip'}
    
    try:
        s3 = boto3.resource('s3')
        s3 = boto3.resource('s3')
        sns = boto3.resource('sns')
        sns = boto3.resource('sns')
        topic = sns.Topic('arn:aws:sns:ap-southeast-2:082821328769:deployDemoTopic')
        job = event.get('CodePipeline.job')
        if job:
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == 'MyAppBuild':
                    build_location = artifact['location']['s3Location']

        demo_bucket = s3.Bucket(demo_name)
        build_bucket = s3.Bucket(build_location['bucketName'])

        demo_zip = StringIO.StringIO()
        build_bucket.download_fileobj(build_location['objectKey'],demo_zip)

        with zipfile.ZipFile(demo_zip) as zfile:
            for fname in zfile.namelist():
                obj = zfile.open(fname)
                demo_bucket.upload_fileobj(obj,fname)
                demo_bucket.Object(fname).Acl().put(ACL='public-read')
        
        print message.format(title, build_name, demo_name)
        topic.publish(
            Subject=title, 
            Message=message.format(title, build_location['bucketName'], demo_name))
        if job:
            code_pipeline = boto3.client('codepipeline')
            code_pipeline.put_job_success_result(jobId=job['id'])
    except Exception as e:
        topic.publish(
            Subject='Deployment of demo failed',
            Message='The deployment of the demo failed:\n{0}'.format(e))
        raise
    return title