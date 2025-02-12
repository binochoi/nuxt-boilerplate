import { LogoFn } from '../types/logo';

const cubism: LogoFn = ({ color, description }) => `
A logo for ${description},
${color} colored,
simple, vector, Crystal Cubism,
no border,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default cubism;
