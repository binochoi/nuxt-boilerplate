export const MediaLinkDownloader = () => {
  const download = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };
  return {
    download,
  };
};
