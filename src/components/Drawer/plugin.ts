import type { App } from 'vue';
import { VDrawer } from './index';

export function drawerPlugin (app: App) {
  app.component('VDrawer', VDrawer);
}
