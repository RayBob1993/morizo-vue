import type { App } from 'vue';
import { VBreadcrumbs } from './index';

export function breadcrumbsPlugin (app: App) {
  app.component('VBreadcrumbs', VBreadcrumbs);
}
