import type { App } from 'vue';
import { vLoading } from './directive';

export function loadingPlugin (app: App) {
  app.directive('loading', vLoading);
}
