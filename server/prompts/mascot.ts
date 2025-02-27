import { LogoPrompt } from '../types/logo';

export default ({ color, description }: Pick<LogoPrompt, 'color' | 'description'>) => `
A mascot logo of ${description}, simple logo
no shading detail, no background
simple, cute, friendly,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;
