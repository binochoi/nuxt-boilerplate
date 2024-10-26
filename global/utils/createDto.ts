import * as v from 'valibot';

export const createDto = <T extends v.BaseSchema>(schema: T) => (i: unknown) => v.parse(schema, i);
