import LogoService from '~~/server/services/logo.service';

export default defineEventHandler(async () => {
  const logo = LogoService();
  return logo.suggestLogoShape();
});
