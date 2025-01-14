import { LogoPrompt } from '~~/server/types/logo';

export type LogoColor = Required<LogoPrompt['color']> | 'random';
