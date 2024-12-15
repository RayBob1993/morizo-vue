import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Хук для отслеживания размеров окна браузера.
 *
 * Этот хук возвращает реактивные ссылки на ширину и высоту окна.
 * Он обновляет значения при изменении размера окна.
 *
 * @returns {Object} Объект с двумя свойствами:
 * @returns {Ref<number>} width - Текущая ширина окна.
 * @returns {Ref<number>} height - Текущая высота окна.
 *
 * @example
 * <template>
 *   <div>
 *     <p>Ширина окна: {{ width }}</p>
 *     <p>Высота окна: {{ height }}</p>
 *   </div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const { width, height } = useWindowSize();
 * </script>
 */
export function useWindowSize () {
  if (!window) {
    return {
      width: ref<number>(0),
      height: ref<number>(0)
    };
  }

  const width = ref<number>(window.innerWidth);
  const height = ref<number>(window.innerHeight);

  function update () {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  }

  onMounted(() => {
    update();

    window.addEventListener('resize', update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
  });

  return {
    width,
    height
  };
}
