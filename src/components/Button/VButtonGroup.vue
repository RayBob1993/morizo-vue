<template>
  <div
    class="v-button-group"
    :class="{
      [`v-button-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVButtonGroupProps } from './types';

  defineProps<IVButtonGroupProps>();
</script>

<style lang="scss">
  .v-button-group {
    display: flex;
    flex-wrap: wrap;

    &--direction {
      &-horizontal {
        flex-direction: row;
        gap: var(--gutter-16) var(--gutter-20);
      }

      &-vertical {
        flex-direction: column;
        gap: var(--gutter-16) var(--gutter-20);
      }
    }
  }
</style>
