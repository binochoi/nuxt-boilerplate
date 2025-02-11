import { LogoFn } from '../types/logo';

const pixelart: LogoFn = ({ color, description }) => `
A simple logo of ${description},
pixel art, flat, no realistic photo details
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default pixelart;
