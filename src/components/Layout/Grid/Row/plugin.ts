import type { App } from 'vue';
import { VRow } from './index';

export function rowPlugin (app: App) {
  app.component('VRow', VRow);
}
