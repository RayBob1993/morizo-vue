import type { App } from 'vue';
import { VPrice } from './index';

export function pricePlugin (app: App) {
  app.component('VPrice', VPrice);
}
