import type { App } from 'vue';
import { VInputPassword } from './index';

export function inputPasswordPlugin (app: App) {
  app.component('VInputPassword', VInputPassword);
}
