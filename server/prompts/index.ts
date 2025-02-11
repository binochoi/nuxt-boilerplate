import { LogoPrompt } from '../types/logo';
import emblem from './emblem';
import minimalistic from './minimalistic';
import neon from './neon_realistic';
import mascot from './mascot';
import abstract from './abstract';
import gradient from './modern_gradient';
import cubism from './cubism';
import outline from './outline';
import pixelart from './pixelart';
import sketch from './sketch';

export type LogoStyle = LogoPrompt['style'];

export const logoStyles = {
  emblem,
  minimalistic,
  neon,
  mascot,
  abstract,
  gradient,
  cubism,
  outline,
  pixelart,
  sketch,
} satisfies {
  [key in LogoStyle]?: (shape: LogoPrompt) => string;
};
