export const useArchiveAPI = () => {
  const { archive } = useTrpcClient();

  return {
    getShowcaseList: () => archive.getShowcaseList.query(),
  };
};
