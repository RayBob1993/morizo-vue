import type { App } from 'vue';
import { VLayout } from './index';

export function layoutPlugin (app: App) {
  app.component('VLayout', VLayout);
}
