import type { App } from 'vue';
import { VTabs, VTab } from './index';

export function tabsPlugin (app: App) {
  app.component('VTabs', VTabs);
  app.component('VTab', VTab);
}
