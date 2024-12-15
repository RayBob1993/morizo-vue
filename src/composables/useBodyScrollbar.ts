import { getScrollbarWidth } from '../utils';
import { onUnmounted } from 'vue';

export function useBodyScrollbar () {
  const CSS_VARIABLE_NAME: string = '--scrollbar-width';

  function hide () {
    if (document.body) {
      document.body.style.overflow = 'hidden';
    }

    if (document.documentElement) {
      document.documentElement.style.setProperty(CSS_VARIABLE_NAME, `${getScrollbarWidth()}px`);
    }
  }

  function show () {
    if (document.body) {
      document.body.style.overflow = '';
    }

    if (document.documentElement) {
      document.documentElement.style.setProperty(CSS_VARIABLE_NAME, '0');
    }
  }

  onUnmounted(() => {
    show();
  });

  return {
    hide,
    show
  };
}
