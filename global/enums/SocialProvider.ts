export enum socialProvider {
  Google = 1,
  // Naver = 2,
  Kakao = 3,
}
export type SocialProviderKey = keyof typeof socialProvider;
export type SocialProviderValue = (typeof socialProvider)[keyof typeof socialProvider];
export type SocialProvider = SocialProviderValue;
