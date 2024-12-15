<template>
  <div
    ref="scrollbar"
    class="v-scrollbar"
    :class="{
      'v-scrollbar--hidden': hidden,
      'v-scrollbar--draggable': draggable,
      'v-scrollbar--grabbing': isGrabbing,
      'v-scrollbar--vertical': vertical,
      'v-scrollbar--horizontal': horizontal,
      [`v-scrollbar--theme-${theme}`]: theme,
      ...classList
    }"
    v-on="scrollListeners"
  >
    <div
      ref="content"
      class="v-scrollbar__content"
    >
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IVScrollbarProps, IVScrollbarEmits, IVScrollbarExpose } from './types';
  import { useListeners, useBreakpointsProp } from '../../composables';
  import { computed, ref, useTemplateRef, useAttrs } from 'vue';

  const props = withDefaults(defineProps<IVScrollbarProps>(), {
    vertical: true,
    horizontal: false,
    infiniteScrollOffset: 0,
    draggableMultiplier: 1
  });

  const emit = defineEmits<IVScrollbarEmits>();
  const attrs = useAttrs();
  const listeners = useListeners(attrs);
  const { classList } = useBreakpointsProp('v-scrollbar', 'size', props);

  const scrollbar = useTemplateRef<HTMLDivElement>('scrollbar');
  const content = useTemplateRef<HTMLDivElement>('content');
  const isGrabbing = ref<boolean>(false);

  const isDown = ref<boolean>(false);
  const startX = ref<number>(0);
  const startY = ref<number>(0);

  const scrollTop = ref<number>(0);
  const scrollLeft = ref<number>(0);

  const scrollListeners = computed(() => {
    return {
      ...listeners,
      scroll (event: Event) {
        emit('scroll', event);

        if (!props.draggable) {
          scrollTop.value = getScrollbarScrollTop();
          scrollLeft.value = getScrollbarScrollLeft();
        }

        const scrollbarHeight: number = scrollbar.value ? scrollbar.value.clientHeight : 0;
        const scrollbarWidth: number = scrollbar.value ? scrollbar.value.clientWidth : 0;
        const contentScrollWidth: number = content.value ? content.value.scrollWidth : 0;
        const contentScrollHeight: number = content.value ? content.value.scrollHeight : 0;

        const scrollBottom: number = scrollTop.value + scrollbarHeight;
        const scrollRight: number = scrollLeft.value + scrollbarWidth;

        const isScrollEndY: boolean = props.vertical && (contentScrollHeight - scrollBottom <= props.infiniteScrollOffset);
        const isScrollEndX: boolean = props.horizontal && (contentScrollWidth - scrollRight <= props.infiniteScrollOffset);

        if (isScrollEndY) {
          emit('scrollEndY');
        }

        if (isScrollEndX) {
          emit('scrollEndX');
        }
      },
      mousedown (event: MouseEvent) {
        emit('mousedown', event);

        if (!props.draggable) {
          return;
        }

        isDown.value = true;
        isGrabbing.value = true;

        if (scrollbar.value) {
          startY.value = event.pageY - getScrollbarOffsetTop();
          startX.value = event.pageX - getScrollbarOffsetLeft();
        }

        scrollTop.value = getScrollbarScrollTop();
        scrollLeft.value = getScrollbarScrollLeft();
      },
      mouseleave (event: MouseEvent) {
        emit('mouseleave', event);

        if (!props.draggable) {
          return;
        }

        isDown.value = false;
        isGrabbing.value = false;
      },
      mouseup (event: MouseEvent) {
        emit('mouseup', event);

        if (!props.draggable) {
          return;
        }

        isDown.value = false;
        isGrabbing.value = false;
      },
      mousemove (event: MouseEvent) {
        emit('mousemove', event);

        if (!props.draggable) {
          return;
        }

        if (!isDown.value) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (scrollbar.value) {
          const y: number = event.pageY - getScrollbarOffsetTop();
          const x: number = event.pageX - getScrollbarOffsetLeft();

          const walkX: number = (x - startX.value) * props.draggableMultiplier;
          const walkY: number = (y - startY.value) * props.draggableMultiplier;

          if (props.horizontal) {
            scrollbar.value.scrollLeft = scrollLeft.value - walkX;
          }

          if (props.vertical) {
            scrollbar.value.scrollTop = scrollTop.value - walkY;
          }
        }
      }
    };
  });

  function getScrollbarScrollTop (): number {
    return props.vertical && scrollbar.value
      ? scrollbar.value.scrollTop
      : 0;
  }

  function getScrollbarScrollLeft (): number {
    return props.horizontal && scrollbar.value
      ? scrollbar.value.scrollLeft
      : 0;
  }

  function getScrollbarOffsetTop (): number {
    return props.vertical && scrollbar.value
      ? scrollbar.value.offsetTop
      : 0;
  }

  function getScrollbarOffsetLeft (): number {
    return props.horizontal && scrollbar.value
      ? scrollbar.value.offsetLeft
      : 0;
  }

  defineExpose<IVScrollbarExpose>({
    el: scrollbar
  });
</script>

<style lang="scss">
  .v-scrollbar {
    --v-scrollbar-thumb-bg: transparent;
    --v-scrollbar-thumb-border-radius: 2px;
    --v-scrollbar-width: auto;
    --v-scrollbar-height: auto;

    width: 100%;
    height: 100%;
    overflow: hidden;

    &::-webkit-scrollbar-thumb {
      border-radius: var(--v-scrollbar-thumb-border-radius);
      background: var(--v-scrollbar-thumb-bg);

      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }

    &::-webkit-scrollbar {
      width: var(--v-scrollbar-width);
      height: var(--v-scrollbar-height);
    }

    &--theme {
      &-primary {
        --v-scrollbar-thumb-bg: var(--color-black);
      }
    }

    @include breakpoints-prop (size) {
      &-small {
        --v-scrollbar-width: 4px;
        --v-scrollbar-height: 4px;
      }
    }

    &::-webkit-scrollbar-track {
      box-shadow: none;
    }

    &--draggable {
      cursor: grab;
    }

    &--grabbing {
      cursor: grabbing;

      user-select: none;
    }

    &--hidden {
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &--vertical {
      overflow-y: auto;
    }

    &--horizontal {
      overflow-x: auto;
    }
  }
</style>
