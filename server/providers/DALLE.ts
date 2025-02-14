import OpenAI from 'openai';
import defineProvider from '../utils/defineProvider';

type PromptParameter = {
  prompt: string;
  size?: '256x256' | '512x512' | '1024x1024';
};
export default defineProvider(() => {
  const config = useRuntimeConfig();
  const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });
  return {
    prompt: async (params: PromptParameter) => {
      try {
        const response = await openai.images.generate({
          model: 'dall-e-3',
          response_format: 'url',
          quality: 'standard',
          n: 1,
          size: '1024x1024',
          ...params,
        });
        return {
          success: true,
          image: response.data[0].url,
        };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('DALL-E API 오류:', error);
        return {
          success: false,
          error: '이미지 생성 중 오류가 발생했습니다.',
        };
      }
    },
  };
});
