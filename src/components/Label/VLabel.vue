<template>
  <div
    class="v-label"
    :class="{
      ...classList,
      [`v-label--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
  import type { IVLabelProps } from './types';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<IVLabelProps>();

  const { classList } = useBreakpointsProp('v-label', 'size', props);
</script>

<style lang="scss">
  .v-label {
    --v-label-padding: 0;
    --v-label-padding-y: var(--v-label-padding);
    --v-label-padding-x: var(--v-label-padding);
    --v-label-bg-color: transparent;
    --v-label-font-size: inherit;
    --v-label-line-height: inherit;
    --v-label-color: inherit;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--v-label-padding-y) var(--v-label-padding-x);

    font-size: var(--v-label-font-size);
    line-height: var(--v-label-line-height);
    color: var(--v-label-color);

    background-color: var(--v-label-bg-color);
  }
</style>
