export default defineNuxtRouteMiddleware(async (to) => {
  const { session } = useAuth();
  if (session.value) {
    switch (to.path) {
    case '/auth/login':
      return navigateTo('/');
    default:
      break;
    }
  }
});
