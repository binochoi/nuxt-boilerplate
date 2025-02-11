import { logoStyles } from '../prompts';
import DALLE from '../providers/Dalle';
import GPT from '../providers/GPT';
import { LogoPrompt } from '../types/logo';

export default defineService({
  dalle: DALLE,
  gpt: GPT,
}, ({ dalle, gpt }) => {
  const generate = async (prompt: LogoPrompt) => {
    try {
      const response = await dalle.prompt({
        prompt: logoStyles[prompt.style as keyof typeof logoStyles](prompt),
        size: '1024x1024',
      });
      return { imageLink: response.image };
    } catch (e) {
      console.error(e);
    }
  };
  const suggestLogoShape = () => gpt.simplePrompt(`
    I'm imagining random shape.
    it can be animals, fishes, plants, objects, buildings, people,
    Just give me a quick look about it.
    your answer should be a few sentence.
    Answer only.
    without describing color.
  `);

  return {
    generate,
    suggestLogoShape,
  };
});
