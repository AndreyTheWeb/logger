import * as effector from 'effector';
import { attachLogger } from './attach';
import { LOGGER_DOMAIN_NAME } from './lib';

const root = effector.createDomain(LOGGER_DOMAIN_NAME);

attachLogger(root);

export const { createDomain, createStore, createEffect, createEvent } = root;
export * from 'effector';
export { configure } from './attach';
