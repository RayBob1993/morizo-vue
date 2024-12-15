<template>
  <div
    v-show="visible"
    class="v-loading"
    :class="{
      [`v-loading--theme-${theme}`]: theme,
      [`v-loading--size-${size}`]: size
    }"
  >
    <v-spinner :size="size"/>
  </div>
</template>

<script setup lang="ts">
  import type { IVLoadingProps } from './types';
  import { VSpinner } from '../../components';

  defineProps<IVLoadingProps>();
</script>

<style lang="scss">
  .v-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: not-allowed;

    @include utils-flex-center();

    &--theme {
      &-primary {
        background-color: var(--overlay-dark-background);
      }

      &-secondary {
        background-color: var(--overlay-light-background);
      }
    }
  }
</style>
