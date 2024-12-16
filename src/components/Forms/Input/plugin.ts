import type { App } from 'vue';
import { VInput } from './index';

export function inputPlugin (app: App) {
  app.component('VInput', VInput);
}
