import OpenAI from '../providers/OpenAI';
import prompt from '../prompts/colorful';

export default defineEventHandler(async (event) => {
  const openai = OpenAI.inject({ event });
  const { image } = await openai.prompt({
    prompt: prompt(),
  });
  if (!image) {
    throw createError('z');
  }
  return `<iframe src=${image} width="1080" height="1080"></iframe>`;
});
