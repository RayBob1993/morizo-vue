import type { App } from 'vue';
import { VAccordion, VAccordionItem } from './index';

export function accordionPlugin (app: App) {
  app.component('VAccordion', VAccordion);
  app.component('VAccordionItem', VAccordionItem);
}
