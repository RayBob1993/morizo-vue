import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Хук для отслеживания текущей позиции прокрутки окна браузера.
 *
 * Этот хук возвращает реактивные ссылки на координаты прокрутки по оси X и Y,
 * а также функцию для установки прокрутки на заданные координаты.
 *
 * @returns {Object} Объект с тремя свойствами:
 * @returns {Ref<number>} x - Текущая позиция прокрутки по оси X.
 * @returns {Ref<number>} y - Текущая позиция прокрутки по оси Y.
 * @returns {function(ScrollToOptions): void} setScroll - Функция для установки прокрутки на заданные координаты.
 *
 * @example
 * <template>
 *   <div>
 *     <p>Позиция прокрутки по оси X: {{ x }}</p>
 *     <p>Позиция прокрутки по оси Y: {{ y }}</p>
 *     <button @click="scrollToTop">Прокрутить вверх</button>
 *   </div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const { x, y, setScroll } = useWindowScroll();
 *
 *   function scrollToTop() {
 *     setScroll({
 *       top: 0,
 *       left: 0,
 *       behavior: 'smooth'
 *     });
 *   }
 * </script>
 */
export function useWindowScroll () {
  if (!window) {
    return {
      x: ref<number>(0),
      y: ref<number>(0)
    };
  }

  const x = ref<number>(window.scrollX);
  const y = ref<number>(window.scrollY);

  function update () {
    if (window) {
      x.value = window.scrollX;
      y.value = window.scrollY;
    }
  }

  function setScroll (options: ScrollToOptions) {
    window.scrollTo(options);
  }

  onMounted(() => {
    update();

    window.addEventListener('scroll', update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update);
  });

  return {
    x,
    y,
    setScroll
  };
}
