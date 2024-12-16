import type { App } from 'vue';
import { VPagination } from './index';

export function paginationPlugin (app: App) {
  app.component('VPagination', VPagination);
}
