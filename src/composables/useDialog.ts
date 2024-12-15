import type { ModelRef } from 'vue';
import { useBodyScrollbar } from './useBodyScrollbar';
import { watch } from 'vue';

export function useDialog (modelValue: ModelRef<boolean>) {
  const { show, hide } = useBodyScrollbar();

  watch(modelValue, value => {
    if (value) {
      hide();
    } else {
      show();
    }
  });

  function onClose () {
    modelValue.value = false;
  }

  return {
    onClose
  };
}
