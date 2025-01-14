import { LogoPrompt } from '~~/server/types/logo';

export default () => {
  const styles: LogoPrompt['style'][] = ['emblem', 'minimalistic', 'neon'];
  type Form = Omit<LogoPrompt, 'color' | 'style'> & {
    style?: LogoPrompt['style']
    color: LogoColor
  };
  const form = reactive<Form>({
    style: undefined,
    color: undefined,
    description: '',
    slogan: undefined,
  });

  return {
    styles,
    form,
  };
};
