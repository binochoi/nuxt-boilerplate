import { Google } from 'arctic';
import { SocialProvider } from 'global/enums/SocialProvider';
import { Singleton } from '../utils/Singleton';

export const useGoogleAuth = Singleton((client: string, secret: string, redirectUrl: string) => new Google(client, secret, redirectUrl));
export const useOauth = Singleton(
  (provider: SocialProvider) => {
    const e = useEvent();
    const { googleOauthClient, googleOauthSecret, oAuthredirectUrl } = useRuntimeConfig(e);
    return ({
      [SocialProvider.Google]: useGoogleAuth(googleOauthClient, googleOauthSecret, oAuthredirectUrl),
    }[provider]);
  },
);
