import type { App } from 'vue';
import { VSection } from './index';

export function sectionPlugin (app: App) {
  app.component('VSection', VSection);
}
