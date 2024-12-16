import type { App } from 'vue';
import { VFancybox } from './index';

export function fancyboxPlugin (app: App) {
  app.component('VFancybox', VFancybox);
}
