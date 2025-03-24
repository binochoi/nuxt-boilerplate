import * as bgRemover from '@imgly/background-removal';

type Src = ImageData | ArrayBuffer | Uint8Array | Blob | URL | string;
type Config = {
  isDev: boolean,
}
export const removeImageBackground = async (imgSrc: Src, { isDev }: Config = { isDev: false }) => {
  const config: bgRemover.Config = {
    proxyToWorker: true,
    debug: isDev,
    device: 'cpu',
    output: {
      format: 'image/webp',
      quality: 1,
    },
    progress: isDev ? (key: string, current: number, total: number) => {
      console.log(`Downloading ${key}: ${current} of ${total}`);
    } : undefined,
  };
  const blob = await bgRemover.removeBackground(imgSrc, config);
  const url = URL.createObjectURL(blob);
  return url;
};
