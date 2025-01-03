import { LogoPrompt } from '~~/server/types/logo';

export default () => {
  const styles: LogoPrompt['style'][] = ['flat', 'vector', 'pixel art', 'textured', 'solid', 'sketch', 'vintage', 'metalic', 'gradient'];
  const form = reactive<LogoPrompt>({
    style: 'flat',
  });

  return {
    styles,
    form,
  };
};
