import { LogoFn } from '../types/logo';

const emblem: LogoFn = ({ color, description, slogan }) => `
${color} colored ${description} iconic gradient filled modern 2D logo,
solid dark background,
${slogan ? `featuring the text ${slogan}` : ''}
`;

export default emblem;
