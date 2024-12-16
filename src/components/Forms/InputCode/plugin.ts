import type { App } from 'vue';
import { VInputCode } from './index';

export function inputCodePlugin (app: App) {
  app.component('VInputCode', VInputCode);
}
