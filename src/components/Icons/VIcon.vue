<template>
  <svg
    class="v-icon"
    :class="{
      ...classList,
      [`v-icon--theme-${theme}`]: theme
    }"
  >
    <use :href="currentIconName"/>
  </svg>
</template>

<script lang="ts" setup>
  import type { IVIconProps } from './types';
  import { useBreakpointsProp } from '../../composables';
  import { computed } from 'vue';

  const props = defineProps<IVIconProps>();

  const { classList } = useBreakpointsProp('v-icon', 'size', props);

  const currentIconName = computed<string>(() => `#icon-${props.icon}`);
</script>

<style lang="scss">
  .v-icon {
    --v-icon-color: currentColor;
    --v-icon-size: auto;
    --v-icon-width: var(--v-icon-size);
    --v-icon-height: var(--v-icon-size);

    fill: var(--v-icon-color);

    width: var(--v-icon-width);
    height: var(--v-icon-height);

    transition: var(--transition-base);

    @include breakpoints-prop (size) {
      &-large {
        --v-icon-size: 24px;
      }

      &-medium {
        --v-icon-size: 18px;
      }

      &-small {
        --v-icon-size: 16px;
      }
    }

    &--theme {
      &-primary {
        --v-icon-color: var(--color-black);
      }
    }
  }
</style>
