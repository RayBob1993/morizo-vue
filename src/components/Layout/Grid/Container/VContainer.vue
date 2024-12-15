<template>
  <div
    class="v-container"
    :class="{
      'v-container--wide': wide
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVContainerProps } from './types';

  defineProps<IVContainerProps>();
</script>

<style lang="scss">
  .v-container {
    margin: 0 auto;
    padding-right: var(--container-gutter);
    padding-left: var(--container-gutter);
    width: 100%;
    max-width: var(--container-size);
    min-height: 1px;

    &--wide {
      max-width: none;
    }
  }
</style>
