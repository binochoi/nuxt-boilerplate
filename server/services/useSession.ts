export const useSession = Singleton(() => {
  const getOne = (id: string) => lucia.validateSession(id);
  const insertOne = (userId: string) => lucia.createSession(userId, {});
  const deleteOne = (id: string) => lucia.invalidateSession(id);
  const deleteExpires = () => lucia.deleteExpiredSessions();

  return {
    getOne,
    insertOne,
    deleteOne,
    deleteExpires,
  };
});
