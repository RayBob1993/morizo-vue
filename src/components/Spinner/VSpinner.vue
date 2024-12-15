<template>
  <div
    class="v-spinner"
    :class="{
      [`v-spinner--size-${size}`]: size,
      [`v-spinner--theme-${theme}`]: theme
    }"
    role="status"
  />
</template>

<script lang="ts" setup>
  import type { IVSpinnerProps } from './types';

  defineProps<IVSpinnerProps>();
</script>

<style lang="scss">
  @keyframes spinner-rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .v-spinner {
    border: 2px solid;

    border-radius: var(--radius-circle);
    border-top-color: transparent!important;

    animation: .5s spinner-rotate linear infinite both;

    &--theme {
      &-primary {
        border-color: var(--color-black);
      }

      &-secondary {
        border-color: var(--color-white);
      }
    }

    &--size {
      &-large {
        width: 32px;
        height: 32px;
      }

      &-medium {
        width: 24px;
        height: 24px;
      }

      &-small {
        width: 18px;
        height: 18px;
      }
    }
  }
</style>
