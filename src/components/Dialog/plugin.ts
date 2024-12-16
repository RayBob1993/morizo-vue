import type { App } from 'vue';
import { VDialog } from './index';

export function dialogPlugin (app: App) {
  app.component('VDialog', VDialog);
}
