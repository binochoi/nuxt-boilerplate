export default defineNuxtRouteMiddleware(async (to) => {
  const { session, fetchSession } = useAuth();
  if (session.value) {
    switch (to.path) {
    case '/auth/login':
      return navigateTo('/');
    default:
      break;
    }
  }

  if (import.meta.client) {
    await fetchSession();
  }
});
