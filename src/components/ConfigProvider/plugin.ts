import type { App } from 'vue';
import { VConfigProvider } from './index';

export function configProviderPlugin (app: App) {
  app.component('VConfigProvider', VConfigProvider);
}
