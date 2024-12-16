import type { App } from 'vue';
import { VDropdown, VDropdownMenuItem } from './index';

export function dropdownPlugin (app: App) {
  app.component('VDropdown', VDropdown);
  app.component('VDropdownMenuItem', VDropdownMenuItem);
}
