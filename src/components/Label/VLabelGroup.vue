<template>
  <div
    class="v-label-group"
    :class="{
      [`v-label-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
  import type { IVLabelGroupProps } from './types';

  defineProps<IVLabelGroupProps>();
</script>

<style lang="scss">
  .v-label-group {
    --v-label-group-gap: 12px;

    display: flex;
    flex-wrap: wrap;
    gap: var(--v-label-group-gap);

    &--direction {
      &-horizontal {
        flex-direction: row;
      }

      &-vertical {
        flex-direction: column;
      }
    }
  }
</style>
