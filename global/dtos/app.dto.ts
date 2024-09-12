import * as v from 'valibot';
import { createDto } from '../utils/createDto';

export const getHelloWorld = createDto(
  v.object({
    text: v.string(),
  }),
);
