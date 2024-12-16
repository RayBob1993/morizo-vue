import type { App } from 'vue';
import { VContainer } from './index';

export function containerPlugin (app: App) {
  app.component('VContainer', VContainer);
}
