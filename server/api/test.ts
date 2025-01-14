import Dalle from '../providers/Dalle';
import prompt from '../prompts/neon_realistic';

export default defineEventHandler(async (event) => {
  const dallE = Dalle.inject({ event });
  const { image } = await dallE.prompt({
    prompt: prompt({
      color: 'navy',
      description: 'shield',
    }),
  });
  if (!image) {
    throw createError('z');
  }
  return `<iframe src=${image} width="1080" height="1080"></iframe>`;
});
