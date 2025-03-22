export const useArchiveAPI = () => {
  const { api } = useRPC();

  return {
    getShowcaseList: () => api.archives.$get(),
  };
};
