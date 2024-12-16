import type { App } from 'vue';
import {
  VPlaceholder,
  VPlaceholderH,
  VPlaceholderBreadcrumbs,
  VPlaceholderButton,
  VPlaceholderIcon,
  VPlaceholderImage, 
  VPlaceholderInput,
  VPlaceholderText
} from './index';

export function placeholderPlugin (app: App) {
  app.component('VPlaceholder', VPlaceholder);
}

export function placeholderHPlugin (app: App) {
  app.component('VPlaceholderH', VPlaceholderH);
}

export function placeholderBreadcrumbsPlugin (app: App) {
  app.component('VPlaceholderBreadcrumbs', VPlaceholderBreadcrumbs);
}

export function placeholderButtonPlugin (app: App) {
  app.component('VPlaceholderButton', VPlaceholderButton);
}

export function placeholderIconPlugin (app: App) {
  app.component('VPlaceholderIcon', VPlaceholderIcon);
}

export function placeholderImagePlugin (app: App) {
  app.component('VPlaceholderImage', VPlaceholderImage);
}

export function placeholderInputPlugin (app: App) {
  app.component('VPlaceholderInput', VPlaceholderInput);
}

export function placeholderTextPlugin (app: App) {
  app.component('VPlaceholderText', VPlaceholderText);
}
