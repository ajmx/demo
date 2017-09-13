import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    demo_name = 'demo.ajumo.co.uk'
    build_name = 'demo.build.ajumo.co.uk'
    title = 'Deployment finished'
    message = '{0} for demo application. Deployed from {1} to {2}.'
    
    try:
        s3 = boto3.resource('s3')
        sns = boto3.resource('sns')
        topic = sns.Topic('arn:aws:sns:ap-southeast-2:082821328769:deployDemoTopic')
        demo_bucket = s3.Bucket(demo_name)
        build_bucket = s3.Bucket(build_name)

        demo_zip = StringIO.StringIO()
        build_bucket.download_fileobj('demo_ajumo_build.zip',demo_zip)

        with zipfile.ZipFile(demo_zip) as zfile:
            for fname in zfile.namelist():
                obj = zfile.open(fname)
                demo_bucket.upload_fileobj(obj,fname)
                demo_bucket.Object(fname).Acl().put(ACL='public-read')
        
        print title
        topic.publish(
            Subject=title, 
            Message=message.format(title, build_name, demo_name))
    except Exception as e:
        topic.publish(
            Subject='Deployment of demo failed',
            Message='The deployment of the demo failed:\n{0}'.format(e))
        raise
    return title