import type { Ref } from 'vue';
import type { Maybe, MaybeElement } from '../types';
import { watch } from 'vue';

/**
 * Хук для отслеживания изменений видимости элемента в пределах области видимости (viewport) с помощью IntersectionObserver.
 *
 * @param {Ref<MaybeElement>} element - Ссылка на элемент, размеры которого нужно отслеживать.
 * @param {IntersectionObserverCallback} callback - Функция обратного вызова, которая будет вызвана при изменении видимости элемента.
 * @param {IntersectionObserverInit} [options] - Опциональные настройки для IntersectionObserver.
 * @returns {Function} stop - Метод для остановки наблюдения за элементом.
 *
 * @example
 * <template>
 *   <div ref="myElement">Элемент наблюдения</div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const myElement = useTemplateRef<HTMLDivElement>('myElement');
 *
 *   const { stop } = useIntersectionObserver(myElement, handleIntersection);
 *
 *   function handleIntersection (entries: Array<IntersectionObserverEntry>) {
 *     if (isIntersecting) {
 *       alert('Я в поле видисти');
 *     }
 *   }
 *
 *   onBeforeUnmount(() => {
 *     stop();
 *   });
 * </script>
 */
export function useIntersectionObserver (element: Ref<MaybeElement>, callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  let observer: Maybe<IntersectionObserver>;

  const stopWatch = watch(element, el => {
    destroy();

    if (el) {
      observer = new IntersectionObserver(callback, options);

      observer.observe(el);
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
