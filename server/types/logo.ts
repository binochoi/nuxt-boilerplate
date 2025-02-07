export type LogoPrompt = {
  style:
  'emblem' |
  'minimalistic' |
  'neon' |
  'mascot' |
  'pixel art' |
  'vector' |
  'textured' |
  'solid' |
  'sketch' |
  'vintage' |
  'metalic' |
  'gradient' |
  'abstract' |
  'outline' |
  'pixelart' |
  'sketch' |
  'crystal';
  color: 'white' | 'red' | 'blue' | 'green' | 'teal' | 'yellow' | 'purple' | 'pink' | 'orange' | 'brown' | 'gray' | 'black' | 'navy';
  description: string,
}

export type LogoFn = (params: Pick<LogoPrompt, 'color' | 'description'>) => string;
