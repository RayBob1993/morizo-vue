import type { App } from 'vue';
import { VInputRange } from './index';

export function inputRangePlugin (app: App) {
  app.component('VInputRange', VInputRange);
}
