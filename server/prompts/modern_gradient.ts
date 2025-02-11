import { LogoFn } from '../types/logo';

const modernGradient: LogoFn = ({ color, description }) => `
a stylized [${description}]
iconic gradient filled modern 2D logo,
using ${color ? `${color}` : 'black'} ink on a white background to maintain a clean and modern look
`;

export default modernGradient;
