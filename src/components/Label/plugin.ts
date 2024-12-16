import type { App } from 'vue';
import { VLabel, VLabelGroup } from './index';

export function labelPlugin (app: App) {
  app.component('VLabel', VLabel);
}

export function labelGroupPlugin (app: App) {
  app.component('VLabelGroup', VLabelGroup);
}
