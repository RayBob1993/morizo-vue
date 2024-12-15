<template>
  <div
    class="v-radio-group"
    :class="{
      [`v-radio-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVRadioGroupProps } from './types';

  defineProps<IVRadioGroupProps>();
</script>

<style lang="scss">
  .v-radio-group {
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
