import OpenAI from 'openai';
import defineProvider from '../utils/defineProvider';

export default defineProvider(() => {
  const config = useRuntimeConfig();
  const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });
  return {
    simplePrompt: async (prompt: string) => {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100,
        temperature: 1,
      });
      return response.choices[0].message.content;
    },
  };
});
