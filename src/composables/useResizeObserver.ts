import type { Ref } from 'vue';
import type { Maybe, MaybeElement } from '../types';
import { watch } from 'vue';

/**
 * Хук для отслеживания изменений размеров элемента с помощью ResizeObserver.
 *
 * @param {Ref<MaybeElement>} element - Ссылка на элемент, размеры которого нужно отслеживать.
 * @param {ResizeObserverCallback} callback - Функция обратного вызова, которая будет вызвана при изменении размеров элемента.
 * @param {ResizeObserverOptions} [options] - Опциональные настройки для ResizeObserver.
 * @returns {Function} stop - Метод для остановки наблюдения за элементом.
 *
 * @example
 * <template>
 *   <div ref="myElement">Измените размер этого элемента</div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const myElement = useTemplateRef<HTMLDivElement>('myElement');
 *
 *   function handleResize (entries: Array<ResizeObserverEntry>) {
 *     for (let entry of entries) {
 *       console.log('Новые размеры:', entry.contentRect.width, entry.contentRect.height);
 *     }
 *   }
 *
 *   const { stop } = useResizeObserver(myElement, handleResize);
 *
 *   onBeforeUnmount(() => {
 *     stop();
 *   });
 * </script>
 */
export function useResizeObserver (element: Ref<MaybeElement>, callback: ResizeObserverCallback, options?: ResizeObserverOptions) {
  let observer: Maybe<ResizeObserver>;

  const stopWatch = watch(element, el => {
    destroy();

    if (el) {
      observer = new ResizeObserver(callback);

      observer.observe(el, options);
    }
  },{
    immediate: true,
    flush: 'post'
  });

  function stop () {
    destroy();
    stopWatch();
  }

  function destroy () {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  }

  return {
    stop
  };
}
