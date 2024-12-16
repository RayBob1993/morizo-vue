import type { App } from 'vue';
import { VImage } from './index';

export function imagePlugin (app: App) {
  app.component('VImage', VImage);
}
