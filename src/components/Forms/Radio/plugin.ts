import type { App } from 'vue';
import { VRadio, VRadioButton, VRadioGroup } from './index';

export function radioPlugin (app: App) {
  app.component('VRadio', VRadio);
}

export function radioButtonPlugin (app: App) {
  app.component('VRadioButton', VRadioButton);
}

export function radioGroupPlugin (app: App) {
  app.component('VRadioGroup', VRadioGroup);
}
