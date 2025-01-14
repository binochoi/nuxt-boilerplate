import { logoStyles } from '../prompts';
import DALLE from '../providers/DALLE';
import GPT from '../providers/GPT';
import { LogoPrompt } from '../types/logo';

export default defineService({
  dalle: DALLE,
  gpt: GPT,
}, ({ dalle, gpt }) => {
  const generate = async (prompt: LogoPrompt) => {
    const response = await dalle.prompt({
      prompt: logoStyles.emblem(prompt),
      size: '1024x1024',
    });
    return { imageLink: response.image };
  };
  const suggestLogoShape = () => gpt.simplePrompt(`
    You are a logo designer.
    you are explaining the shape of the logo to the customer.
    It's a simple one sentence, creative idea
    You don't have to talk about the color.
    What kind of style would be good?
  `);

  return {
    generate,
    suggestLogoShape,
  };
});
