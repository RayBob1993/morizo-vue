import type { App } from 'vue';
import { VCheckbox, VCheckboxGroup } from './index';

export function checkboxPlugin (app: App) {
  app.component('VCheckbox', VCheckbox);
}

export function checkboxGroupPlugin (app: App) {
  app.component('VCheckboxGroup', VCheckboxGroup);
}
