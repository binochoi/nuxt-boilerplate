import { LogoPrompt } from '~~/server/types/logo';

export default () => {
  const styles: LogoPrompt['style'][] = [
    'minimalistic', 'gradient', 'cubism',
    'neon', 'emblem', 'mascot', 'sketch',
  ];
  type Form = Omit<LogoPrompt, 'color' | 'style'> & {
    style?: LogoPrompt['style']
    color: LogoColor
  };
  const form = reactive<Form>({
    style: undefined,
    color: 'random',
    description: '',
  });
  const canSubmit = computed(() => {
    const {
      style,
      description,
    } = form;
    if (!style) {
      return 'style_required';
    }
    if (description === '') {
      return 'description_required';
    }
    return true;
  });
  return {
    styles,
    form,
    canSubmit,
  };
};
