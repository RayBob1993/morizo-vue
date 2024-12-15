import type { DirectiveBinding, ObjectDirective } from 'vue';
import type { HTMLElementWithObserver, TDirectiveBindValue, TDirectiveModifiers, IObserverConfig, IAnimationConfig } from './types';
import { isObject, isString, isFunction } from '../../utils';

export const vVisible: ObjectDirective<HTMLElementWithObserver, TDirectiveBindValue, TDirectiveModifiers> = {
  mounted (element: HTMLElementWithObserver, bind: DirectiveBinding<TDirectiveBindValue, TDirectiveModifiers>) {
    let configObserver: IObserverConfig = {
      threshold: 0.3,
      rootMargin: '0px',
      root: null
    };

    let animationConfig: IAnimationConfig = {
      delay: '0'
    };

    const actions = {
      string: () => {
        if (isString(bindingValue)) {
          element.classList.add(...bindingValue.split(' '));
        }
      },
      function: () => {
        if (isFunction(bindingValue)) {
          bindingValue(element);
        }
      }
    };

    const bindingValue = isObject(bind.value) && 'bindingValue' in bind.value
      ? bind.value.bindingValue
      : bind.value;

    if (isObject(bind.value) && 'observerConfig' in bind.value) {
      configObserver = { ...configObserver, ...bind.value.observerConfig };
    }

    if (isObject(bind.value) && 'animationConfig' in bind.value) {
      animationConfig = { ...animationConfig, ...bind.value.animationConfig };
    }

    if (bind.modifiers.hide) {
      element.style.opacity = '0';
    }

    if (animationConfig.delay) {
      element.style.animationDelay = animationConfig.delay;
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && entry.intersectionRatio > configObserver.threshold!) {
          const actionType = typeof bindingValue;

          if (actionType in actions) {
            actions[actionType as keyof typeof actions]();
          }

          if (bind.modifiers.once) {
            observer.unobserve(element);
          }
        }
      });
    }, configObserver);

    observer.observe(element);
    element._observer = observer;
  },
  unmounted (element: HTMLElementWithObserver) {
    if (element._observer) {
      element._observer.disconnect();
    }
  },
  getSSRProps (binding) {
    return {
      style: {
        ...(binding.modifiers.hide && {
          opacity: 0
        })
      }
    };
  }
};
