import { LogoFn } from '../types/logo';

const abstractExpressionism: LogoFn = ({ color, description }) => `
A logo for ${description},
simple, vector, ${color}, Abstract Expressionism.
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default abstractExpressionism;
