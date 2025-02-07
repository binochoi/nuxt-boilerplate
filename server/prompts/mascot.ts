import { LogoPrompt } from '../types/logo';

export default ({ color, description }: Pick<LogoPrompt, 'color' | 'description'>) => `
A mascot logo of ${description}, simple, vector
no shading detail
simple,
${color ? `color: ${color}` : ''},
no background
`;
