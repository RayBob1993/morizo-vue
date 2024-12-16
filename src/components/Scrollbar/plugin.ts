import type { App } from 'vue';
import { VScrollbar } from './index';

export function scrollbarPlugin (app: App) {
  app.component('VScrollbar', VScrollbar);
}
