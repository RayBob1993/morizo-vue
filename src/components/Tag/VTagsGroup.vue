<template>
  <div
    class="v-tags-group"
    role="group"
    :class="{
      [`v-tags-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVTagsGroupProps } from './types';

  defineProps<IVTagsGroupProps>();
</script>

<style lang="scss">
  .v-tags-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gutter-10);

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
