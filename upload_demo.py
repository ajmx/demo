import boto3
import StringIO
import zipfile
import mimetypes

s3 = boto3.resource('s3')
demo_bucket = s3.Bucket('demo.ajumo.co.uk')
build_bucket = s3.Bucket('demo.build.ajumo.co.uk')

demo_zip = StringIO.StringIO()
build_bucket.download_fileobj('demo_ajumo_build.zip',demo_zip)

with zipfile.ZipFile(demo_zip) as zfile:
    for fname in zfile.namelist():
        obj = zfile.open(fname)
        demo_bucket.upload_fileobj(obj,fname, 
            ExtraArgs={'ContentType':mimetypes.guess_type(fname)[0]})
        demo_bucket.Object(fname).Acl().put(ACL='public-read')