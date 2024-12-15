<template>
  <div
    class="v-checkbox-group"
    :class="{
      [`v-checkbox-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVCheckboxGroupProps } from './types';

  defineProps<IVCheckboxGroupProps>();
</script>

<style lang="scss">
  .v-checkbox-group {
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
