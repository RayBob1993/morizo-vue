import type { App } from 'vue';
import { VInputNumber } from './index';

export function inputNumberPlugin (app: App) {
  app.component('VInputNumber', VInputNumber);
}
