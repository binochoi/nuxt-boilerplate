import * as bgRemover from '@imgly/background-removal';

type Src = ImageData | ArrayBuffer | Uint8Array | Blob | URL | string;
export const removeImageBackground = async (imgSrc: Src) => {
  const config: bgRemover.Config = {
    proxyToWorker: true,
    debug: false,
    device: 'gpu',
    output: {
      format: 'image/webp',
      quality: 1,
    },
  };
  const blob = await bgRemover.removeBackground(imgSrc, config);
  const url = URL.createObjectURL(blob);
  // 다운로드 링크 생성 및 클릭
  const link = document.createElement('a');
  link.href = url;
  link.download = 'removed-background.webp'; // 다운로드될 파일명
  document.body.appendChild(link);
  link.click();
  return url;
};
