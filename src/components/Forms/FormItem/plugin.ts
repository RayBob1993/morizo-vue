import type { App } from 'vue';
import { VFormItem } from './index';

export function formItemPlugin (app: App) {
  app.component('VFormItem', VFormItem);
}
