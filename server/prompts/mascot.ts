import { LogoPrompt } from '../types/logo';

export default ({ color, description }: Pick<LogoPrompt, 'color' | 'description'>) => `
A mascot logo of ${description}, simple, vector
no shading detail
simple,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;
