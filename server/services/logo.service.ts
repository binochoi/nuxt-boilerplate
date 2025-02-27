import { db } from '../libs/drizzle/drizzle';
import { logoStyles } from '../prompts';
import DALLE from '../providers/DALLE';
import GPT from '../providers/GPT';
import R2 from '../providers/R2';
import { MediaRepository } from '../repositories/media.repository';
import { UserRepository } from '../repositories/user.repository';
import { LogoPrompt } from '../types/logo';
import { MediaLinkDownloader } from './MediaLinkDownloader';

export default defineService({
  dalle: DALLE,
  gpt: GPT,
}, ({ dalle, gpt }) => {
  const config = useRuntimeConfig();
  const generateImageLink = async (prompt: LogoPrompt) => {
    try {
      const response = await dalle.prompt({
        prompt: logoStyles[prompt.style as keyof typeof logoStyles](prompt),
        size: '1024x1024',
      });
      return { imageLink: response.image };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  };
  const generate = async (prompt: LogoPrompt, userId: string) => {
    const { imageLink } = await generateImageLink(prompt);
    if (!imageLink) {
      throw createError({
        message: 'image link is not found',
      });
    }
    const blob = await MediaLinkDownloader().downloadByBlob(imageLink);
    const { id } = await db(config.dbConnectionStr).transaction(async (tx) => {
      const [{ id }] = await MediaRepository(tx).insertOne({ userId });
      await UserRepository(tx).payOneCredit(userId);
      return { id };
    });
    await R2().upload({
      key: `generated/raw/${id}`,
      bucketName: 'lymgo',
      body: Buffer.from(await blob.arrayBuffer()),
    });
    return {
      fileId: id,
    };
  };
  const suggestLogoShape = () => gpt.simplePrompt(`
    I'm imagining random shape.
    it can be animals, fishes, plants, decoration, objects, people,
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
