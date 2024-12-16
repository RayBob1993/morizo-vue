import type { App } from 'vue';
import { VButton, VButtonLink, VButtonEmpty } from './index';

export function buttonPlugin (app: App) {
  app.component('VButton', VButton);
}

export function buttonLinkPlugin (app: App) {
  app.component('VButtonLink', VButtonLink);
}

export function buttonEmptyPlugin (app: App) {
  app.component('VButtonEmpty', VButtonEmpty);
}
