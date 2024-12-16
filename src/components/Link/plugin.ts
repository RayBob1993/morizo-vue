import type { App } from 'vue';
import { VLink } from './index';

export function linkPlugin (app: App) {
  app.component('VLink', VLink);
}
