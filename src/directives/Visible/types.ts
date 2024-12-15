export interface HTMLElementWithObserver extends HTMLElement {
  _observer?: IntersectionObserver;
}

export interface IObserverConfig {
  rootMargin?: IntersectionObserver['rootMargin'];
  threshold?: number;
  root?: IntersectionObserver['root'];
}

export interface IAnimationConfig {
  delay?: CSSStyleDeclaration['animationDelay'];
}

export interface IDirectiveBindWithConfig {
  observerConfig?: IObserverConfig;
  animationConfig?: IAnimationConfig;
  bindingValue: string | Function;
}

export type TDirectiveModifiers = 'hide' | 'once';

export type TDirectiveBindValue = string | Function | IDirectiveBindWithConfig;
