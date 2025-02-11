import { LogoFn } from '../types/logo';

const outline: LogoFn = ({ color, description }) => `
A simple logo of ${description},
outline, flat, vector--no realistic photo details
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default outline;
