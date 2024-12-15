<template>
  <figure
    ref="root"
    class="v-image"
    :class="[
      {
        'v-image--loading': isLoading,
        'v-image--center': center,
        'v-image--rounded': rounded,
        'v-image--loaded': !isError && isLoaded,
        'v-image--error': isError
      }
    ]"
  >
    <div class="v-image__wrap">
      <transition name="fade-in">
        <div
          v-if="isPlaceholderVisible"
          class="v-image__wrap-placeholder"
        />
      </transition>

      <picture class="v-image__wrap-picture">
        <slot/>

        <img
          ref="image"
          class="v-image__wrap-native"
          :class="[
            `v-image__wrap-native--fit-${fit}`
          ]"
          :src="src"
          srcset="./empty.gif"
          alt=""
          @load="onLoad"
          @error="onError"
        >
      </picture>
    </div>
  </figure>
</template>

<script lang="ts" setup>
  import type { IVImageProps, IVImageEmits } from './types';
  import { useIntersectionObserver } from '../../composables';
  import { FitList } from '../../enums';
  import { useTemplateRef, computed, ref, watch, onMounted } from 'vue';

  const props = withDefaults(defineProps<IVImageProps>(), {
    fit: FitList.contain,
    hasPlaceholder: true,
    threshold: 0.1
  });

  const emit = defineEmits<IVImageEmits>();

  const image = useTemplateRef<HTMLImageElement>('image');
  const root = useTemplateRef<HTMLDivElement>('root');
  const isLoading = ref<boolean>(false);
  const isLoaded = ref<boolean>(false);
  const isError = ref<boolean>(false);

  const { stop } = useIntersectionObserver(image, onViewportVisible, {
    threshold: props.threshold
  });

  const isPlaceholderVisible = computed<boolean>(() => props.hasPlaceholder && (isError.value || !isLoaded.value));

  function setStatuses (loading = false, error = false, loaded = false) {
    isLoading.value = loading;
    isError.value = error;
    isLoaded.value = loaded;
  }

  function onLoadImage () {
    setStatuses();

    if (!props.src) {
      return setStatuses(false, true, false);
    }
  }

  function onViewportVisible ([{ isIntersecting }]: Array<IntersectionObserverEntry>) {
    if (isIntersecting) {
      setStatuses(true);

      if (image.value && props.src) {
        if ('srcset' in image.value) {
          image.value.srcset = props.src;
        }
      }

      stop();
    }
  }

  function onLoad (event: Event) {
    if (!props.src) {
      return setStatuses(false, true, false);
    }

    const isComplete = image.value?.complete && (image.value?.naturalWidth > 1);

    if (isComplete) {
      setStatuses(false, false, true);

      emit('load', event);
    } else {
      setStatuses(false, true, false);

      emit('error', event);
    }
  }

  function onError (event: Event) {
    setStatuses(false, true, false);

    emit('error', event);
  }

  onMounted(() => {
    onLoadImage();
  });

  watch(() => props.src, onLoadImage);
</script>

<style lang="scss">
  .v-image {
    --v-image-width: auto;
    --v-image-height: auto;
    --v-image-aspect-ratio: auto;

    margin: 0;
    overflow: hidden;
    aspect-ratio: var(--v-image-aspect-ratio);

    &--loaded {
      .v-image__wrap-native {
        opacity: 1;
      }
    }

    &--center {
      .v-image__wrap-picture {
        @include utils-flex-center();
      }
    }

    &__wrap {
      position: relative;

      height: 100%;

      overflow: hidden;

      &-placeholder {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: #eee;
      }

      &-picture {
        display: block;
        height: 100%;
      }

      &-native {
        display: block;

        transition: var(--transition-base);

        opacity: 0;
        max-width: 100%;
        height: var(--v-image-height);
        width: var(--v-image-width);
        aspect-ratio: var(--v-image-aspect-ratio);

        &--fit {
          &-cover {
            --v-image-width: 100%;
            --v-image-height: 100%;

            object-fit: cover;
          }

          &-contain {
            max-height: 100%;

            object-fit: contain;
          }

          &-fill {
            object-fit: fill;
          }
        }
      }
    }
  }
</style>
