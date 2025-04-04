import OpenAI from 'openai';

export default () => {
  const config = useRuntimeConfig();
  const openai = new OpenAI({
    apiKey: config.openai.apiKey,
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
};
