export type LogoPrompt = {
  style:
  'emblem' |
  'minimalistic' |
  'neon' |
  'pixel art' |
  'vector' |
  'textured' |
  'solid' |
  'sketch' |
  'vintage' |
  'metalic' |
  'gradient';
  color?: 'white' | 'red' | 'blue' | 'green' | 'teal' | 'yellow' | 'purple' | 'pink' | 'orange' | 'brown' | 'gray' | 'black' | 'navy';
  description: string,
  slogan?: string,
}

export type LogoFn = (params: Pick<LogoPrompt, 'color' | 'description' | 'slogan'>) => string;
