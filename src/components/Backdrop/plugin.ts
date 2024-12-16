import type { App } from 'vue';
import { VBackdrop } from './index';

export function backdropPlugin (app: App) {
  app.component('VBackdrop', VBackdrop);
}
