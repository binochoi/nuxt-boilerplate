export const MediaLinkDownloader = () => {
  const downloadByBlob = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };
  return {
    downloadByBlob,
  };
};
