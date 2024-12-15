<template>
  <span
    class="v-badge"
    :class="{
      ...classList,
      [`v-badge--theme-${theme}`]: theme,
      'v-badge--fixed': !!$slots.default
    }"
  >
    <slot/>

    <span
      v-if="!hidden"
      class="v-badge__content"
      v-text="content"
    />
  </span>
</template>

<script lang="ts" setup>
  import type { IVBadgeProps } from './types';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<IVBadgeProps>();

  const { classList } = useBreakpointsProp('v-badge', 'size', props);
</script>

<style lang="scss">
  .v-badge {
    --v-badge-bg: transparent;
    --v-badge-color: inherit;
    --v-badge-padding: 0;
    --v-badge-padding-y: var(--v-badge-padding);
    --v-badge-padding-x: var(--v-badge-padding);
    --v-badge-font-size: inherit;

    display: inline-flex;

    &--theme {
      &-primary {
        --v-badge-bg: var(--color-black);
        --v-badge-color: var(--color-white);
      }
    }

    @include breakpoints-prop (size) {
      &-small {
        --v-badge-font-size: var(--font-size-small);
        --v-badge-padding-y: var(--gutter-4);
        --v-badge-padding-x: var(--gutter-6);
      }

      &-medium {
        --v-badge-font-size: var(--font-size-medium);
        --v-badge-padding-y: var(--gutter-4);
        --v-badge-padding-x: var(--gutter-6);
      }

      &-large {
        --v-badge-font-size: var(--font-size-large);
        --v-badge-padding-y: var(--gutter-4);
        --v-badge-padding-x: var(--gutter-6);
      }
    }

    &--fixed {
      position: relative;

      .v-badge__content {
        position: absolute;
        top: calc(var(--gutter-4) * -1);
        right: calc(var(--gutter-8) * -1);
      }
    }

    &__content {
      display: inline-block;
      padding: var(--v-badge-padding-y) var(--v-badge-padding-x);

      background-color: var(--v-badge-bg);
      text-align: center;

      font-weight: normal;
      color: var(--v-badge-color);
      font-size: var(--v-badge-font-size);
    }
  }
</style>
