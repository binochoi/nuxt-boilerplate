import { LogoPrompt } from '~~/server/types/logo';

export default () => {
  const colors: LogoColor[] = ['random', 'white', 'gray', 'black', 'navy', 'red', 'purple', 'pink', 'orange', 'yellow', 'blue', 'green', 'teal', 'brown'] as const;
  const colorGradients = {
    random: 'linear-gradient(45deg, #FF70A6 0%, #FF9770 30%, #FFD670 60%, #70D6FF 100%)',
    white: 'linear-gradient(45deg, #FFFFFF 0%, #F8F9FA 45%, #F1F3F5 55%, #FFFFFF 100%)',
    navy: 'linear-gradient(45deg, #001F3F 0%, #003366 50%, #004080 100%)',
    red: 'linear-gradient(45deg, #FF8A80 0%, #FF5252 50%, #FF1744 100%)',
    blue: 'linear-gradient(45deg, #82B1FF 0%, #448AFF 50%, #2979FF 100%)',
    green: 'linear-gradient(45deg, #B9F6CA 0%, #69F0AE 50%, #00E676 100%)',
    teal: 'linear-gradient(45deg, #A7FFEB 0%, #64FFDA 50%, #1DE9B6 100%)',
    yellow: 'linear-gradient(45deg, #FFE57F 0%, #FFD740 50%, #FFC400 100%)',
    purple: 'linear-gradient(45deg, #EA80FC 0%, #E040FB 50%, #D500F9 100%)',
    pink: 'linear-gradient(45deg, #FF80AB 0%, #FF4081 50%, #F50057 100%)',
    orange: 'linear-gradient(45deg, #FFB74D 0%, #FFA726 50%, #FF9100 100%)',
    brown: 'linear-gradient(45deg, #BCAAA4 0%, #8D6E63 50%, #5D4037 100%)',
    gray: 'linear-gradient(45deg, #CFD8DC 0%, #90A4AE 50%, #607D8B 100%)',
    black: 'linear-gradient(45deg, #424242 0%, #212121 50%, #000000 100%)',
  } as const;
  const getTooltipColor = (color: LogoColor) => {
    switch (color) {
    case 'white':
      return;
    case 'random':
      return;
    default:
      return color;
    }
  };
  const getOneRandomColor = (): Required<LogoPrompt['color']> => {
    const newColors = colors.filter((colorName) => colorName !== 'random');
    const randomIndex = Math.floor(Math.random() * newColors.length);
    return newColors[randomIndex];
  };
  return {
    colors,
    colorGradients,
    getTooltipColor,
    getOneRandomColor,
  };
};
