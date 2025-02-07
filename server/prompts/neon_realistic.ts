import { LogoFn } from '../types/logo';

const neonRealistic: LogoFn = ({ color, description }) => `
Act as a digital logo curator with expertise in Al-generated images.
Create innovative and intriguing prompts.
Each prompt should inspire unique,
visually striking logos and words that push the boundaries of machine creativity.
Below I will provide you with three commands: "subject", and "style".
"Subject" is the item or subject I want you to create.
"Style" will be the style and characteristics of the image,
for example "neon" or "photorealistic"

Subject: ${description}
Style: Neon
Color: ${color || 'black'}
Background: solid dark

`;

export default neonRealistic;
