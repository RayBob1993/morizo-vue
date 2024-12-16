import type { App } from 'vue';
import { VSelect, VOption } from './index';

export function selectPlugin (app: App) {
  app.component('VSelect', VSelect);
  app.component('VOption', VOption);
}
