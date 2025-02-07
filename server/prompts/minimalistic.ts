import { LogoFn } from '../types/logo';

const minimalistic: LogoFn = ({ color, description }) => `
Create a minimalistic and artistic logo that incorporates a stylized '[${description}]'
simple yet expressive, use a script style font that is smooth and slightly curvy,
conveying a soft and friendly aesthetic.
Feel cohesive and clever,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default minimalistic;
