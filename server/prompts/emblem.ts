import { LogoFn } from '../types/logo';

const emblem: LogoFn = ({ color, description, slogan }) => `
An emblem for a shield with ${description},
vector, simple, ${color}.
${slogan ? `featuring the text ${slogan}` : ''}
`;

export default emblem;
