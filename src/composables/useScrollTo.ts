import type { MaybeRef } from 'vue';
import type { MaybeElement, TemplateRef } from '../types';
import { isString } from '../utils';
import { isRef, unref } from 'vue';

export function useScrollTo (el: MaybeRef<MaybeElement> | TemplateRef<MaybeElement> | string, options?: ScrollIntoViewOptions) {
  const element = isString(el)
    ? document.querySelector(el)
    : isRef(el) ? unref(el) : el;

  element?.scrollIntoView({
    behavior: 'smooth',
    ...options
  });
}
