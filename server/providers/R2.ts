import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export default () => {
  const config = useRuntimeConfig();
  const client = new S3Client({
    endpoint: 'https://77e9c6a82acee22f7dedf81bef2a1bbf.r2.cloudflarestorage.com',
    credentials: {
      accessKeyId: config.cloudflare.r2.accessKeyId, // R2 Access Key
      secretAccessKey: config.cloudflare.r2.secretAccessKey, // R2 Secret Key
    },
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
    region: 'apac',
  });

  return {

    upload: async ({ bucketName, key, body }: {
      bucketName: string,
      key: string,
      body: Buffer | Blob | ReadableStream,
    }) => {
      const cmd = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: body,
        ChecksumAlgorithm: undefined,
        ContentMD5: undefined,
      });
      return client.send(cmd);
    },
  };
};
