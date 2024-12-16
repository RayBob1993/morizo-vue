import type { App } from 'vue';
import { VSplitLayout } from './index';

export function splitLayoutPlugin (app: App) {
  app.component('VSplitLayout', VSplitLayout);
}
