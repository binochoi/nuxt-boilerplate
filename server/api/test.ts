import prompt from '../prompts/neon_realistic';
import DALLE from '../providers/DALLE';

export default defineEventHandler(async () => {
  if (useRuntimeConfig().isProd) {
    throw createError({ status: 404 });
  }
  const dallE = DALLE();
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
