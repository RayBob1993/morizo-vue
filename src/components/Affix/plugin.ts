import type { App } from 'vue';
import { VAffix } from './index';

export function affixPlugin (app: App) {
  app.component('VAffix', VAffix);
}
