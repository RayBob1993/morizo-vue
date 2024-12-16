import type { App } from 'vue';
import { VInputFile } from './index';

export function inputFilePlugin (app: App) {
  app.component('VInputFile', VInputFile);
}
