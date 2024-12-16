import type { App } from 'vue';
import { vClickOutside } from './directive';

export function clickOutsidePlugin (app: App) {
  app.directive('clickOutside', vClickOutside);
}
