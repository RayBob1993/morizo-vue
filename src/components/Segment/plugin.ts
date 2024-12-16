import type { App } from 'vue';
import { VSegment } from './index';

export function segmentPlugin (app: App) {
  app.component('VSegment', VSegment);
}
