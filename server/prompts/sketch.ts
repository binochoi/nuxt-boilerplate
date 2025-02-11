import { LogoFn } from '../types/logo';

const sketch: LogoFn = ({ color, description }) => `
A simple logo of ${description},
a handwriting sketch, paper texture, flat, no realistic photo details, no shadow,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default sketch;
