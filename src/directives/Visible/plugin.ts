import type { App } from 'vue';
import { vVisible } from './directive';

export function visiblePlugin (app: App) {
  app.directive('visible', vVisible);
}
