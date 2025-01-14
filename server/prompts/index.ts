import { LogoPrompt } from '../types/logo';
import emblem from './emblem';

export type LogoStyle = LogoPrompt['style'];

export const logoStyles = {
  emblem,
// "pixel art":
} satisfies {
  [key in LogoStyle]?: (shape: LogoPrompt) => string;
};
