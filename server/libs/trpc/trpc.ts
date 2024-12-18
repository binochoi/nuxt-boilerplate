import { initTRPC } from '@trpc/server';
import type { H3Event, EventHandlerRequest } from 'h3';

const t = initTRPC.context<RequestContext>().create();

export type RequestContext = {
    event: H3Event<EventHandlerRequest>,
};
export const { procedure, router, middleware } = t;
