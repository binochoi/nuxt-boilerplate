import * as v from 'valibot';
import { SocialProvider } from '../enums/SocialProvider';

export default v.object({
  // eslint-disable-next-line no-underscore-dangle
  provider: v.enum_(SocialProvider),
  authorizationCode: v.string(),
});
