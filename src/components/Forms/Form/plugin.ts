import type { App } from 'vue';
import { VForm } from './index';

export function formPlugin (app: App) {
  app.component('VForm', VForm);
}
