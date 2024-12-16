import type { App } from 'vue';
import { VInputMask } from './index';

export function inputMaskPlugin (app: App) {
  app.component('VInputMask', VInputMask);
}
