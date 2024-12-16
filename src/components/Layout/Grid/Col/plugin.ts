import type { App } from 'vue';
import { VCol } from './index';

export function colPlugin (app: App) {
  app.component('VCol', VCol);
}
