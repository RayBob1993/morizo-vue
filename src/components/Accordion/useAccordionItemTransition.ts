import type { RendererElement } from 'vue';

export function useAccordionItemTransition () {
  function reset (el: RendererElement) {
    el.style.maxHeight = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }

  const transitionEvents = {
    beforeEnter (el: RendererElement) {
      if (!el.dataset) {
        el.dataset = {};
      }

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.maxHeight = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },

    enter (el: RendererElement) {
      el.dataset.oldOverflow = el.style.overflow;

      if (el.scrollHeight !== 0) {
        el.style.maxHeight = `${el.scrollHeight}px`;
      } else {
        el.style.maxHeight = 0;
      }

      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
      el.style.overflow = 'hidden';
    },

    afterEnter (el: RendererElement) {
      el.style.maxHeight = '';
      el.style.overflow = el.dataset.oldOverflow;
    },

    enterCancelled (el: RendererElement) {
      reset(el);
    },

    beforeLeave (el: RendererElement) {
      if (!el.dataset) {
        el.dataset = {};
      }

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.maxHeight = `${el.scrollHeight}px`;
      el.style.overflow = 'hidden';
    },

    leave (el: RendererElement) {
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },

    afterLeave (el: RendererElement) {
      reset(el);
    },

    leaveCancelled (el: RendererElement) {
      reset(el);
    }
  };

  return {
    transitionEvents
  };
}
