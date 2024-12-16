import type { App } from 'vue';
import { VText } from './index';

export function textPlugin (app: App) {
  app.component('VText', VText);
}
