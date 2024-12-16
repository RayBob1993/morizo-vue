import type { App } from 'vue';
import { VBadge } from './index';

export function badgePlugin (app: App) {
  app.component('VBadge', VBadge);
}
