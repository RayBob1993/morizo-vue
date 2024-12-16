import type { App } from 'vue';
import { VPageLayout } from './index';

export function pageLayoutPlugin (app: App) {
  app.component('VPageLayout', VPageLayout);
}
