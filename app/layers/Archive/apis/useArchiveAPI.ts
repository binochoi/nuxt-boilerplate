export const useArchiveAPI = () => {
  const client = useTrpcClient();

  return {
    getShowcaseList: () => client.archive.getShowcaseList.query(),
  };
};
