import type { App } from 'vue';
import { VSpinner } from './index';

export function spinnerPlugin (app: App) {
  app.component('VSpinner', VSpinner);
}
