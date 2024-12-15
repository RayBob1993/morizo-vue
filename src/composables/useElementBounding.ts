import type { Ref } from 'vue';
import type { MaybeElement } from '../types';
import { useResizeObserver } from './useResizeObserver';
import { ref, watch } from 'vue';

export function useElementBounding (el: Ref<MaybeElement>) {
  const height = ref<number>(0);
  const bottom = ref<number>(0);
  const left = ref<number>(0);
  const right = ref<number>(0);
  const top = ref<number>(0);
  const width = ref<number>(0);
  const x = ref<number>(0);
  const y = ref<number>(0);

  function update () {
    if (!el.value) {
      height.value = 0;
      bottom.value = 0;
      left.value = 0;
      right.value = 0;
      top.value = 0;
      width.value = 0;
      x.value = 0;
      y.value = 0;

      return;
    }

    const rect = el.value.getBoundingClientRect();

    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }

  useResizeObserver(el, update);

  watch(el, () => update);

  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}
