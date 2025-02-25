export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      slogan: 'Logo Generator',
      label: {
        appName: 'Lymgo',
        pricing: 'Pricing',
        generate: 'Generate',
        logout: 'Logout',
        login: 'Login',
        signup: 'Sign Up',
      },
      start_oauth_with: 'Continue with {provider}',

      ask_sure_logout: 'Are you sure you want to sign out?',
      ask_login_required: 'Login is required !',
      pricing: {
        free: {
          label: 'Free',
          description: '1 credit',
        },
        starter: {
          label: 'Starter',
          description: 'Start with ease',
        },
        business: {
          label: 'Business',
          description: '10% off',
        },
      },
    },
    ko: {
      slogan: '로고 생성기',
      label: {
        pricing: '가격',
        generate: '만들기',
        logout: '로그아웃',
        login: '로그인',
        signup: '시작하기',
      },
      start_oauth_with: '{provider}로 시작하기',

      ask_sure_logout: '정말 로그아웃 하시겠어요?',
      ask_login_required: '로그인이 필요합니다 !',
      pricing: {
        free: {
          label: '무료',
          description: '1 크레딧',
        },
        starter: {
          label: '스타터',
          description: '가볍게 시작해보기',
        },
        business: {
          label: '비즈니스',
          description: '10% 할인',
        },
      },
    },
  },
}));
