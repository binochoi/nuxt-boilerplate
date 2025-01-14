import { LogoPrompt } from '../types/logo';

export default ({ color, description }: Pick<LogoPrompt, 'color' | 'description'>) => `
An emblem for a shield with ${description},
vector, simple, ${color}.
`;
