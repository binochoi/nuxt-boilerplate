import { assertUser } from '~~/server/helpers/assertUser';
import LogoService from '~~/server/services/logo.service';
import { LogoPrompt } from '~~/server/types/logo';
import { defineSchema } from '~~/server/utils/defineSchema';

export const schema = defineSchema({
  // query: {} as ReturnType<typeof LogoService>['generate'],
  body: {} as LogoPrompt,
});

export default defineEventHandler(async (e) => {
  const user = assertUser(e);
  if (user.credit <= 0) {
    throw createError({
      statusCode: 400,
      message: 'credit is not enough',
    });
  }
  const logo = LogoService();
  const logoPrompt = await readValidatedBody(e, schema.body);
  return logo.generate(logoPrompt, user.id);
});
