import type { App } from 'vue';
import { VTag, VTagsGroup } from './index';

export function tagPlugin (app: App) {
  app.component('VTag', VTag);
}

export function tagsGroupPlugin (app: App) {
  app.component('VTagsGroup', VTagsGroup);
}
