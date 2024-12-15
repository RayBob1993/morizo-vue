<template>
  <div
    class="v-tag"
    :class="{
      ...classList,
      [`v-tag--theme-${theme}`]: theme
    }"
  >
    <div class="v-tag__value">
      <slot/>
    </div>

    <v-button-empty @click="emit('delete')">
      <v-icon
        icon="close"
        size="small"
      />
    </v-button-empty>
  </div>
</template>

<script setup lang="ts">
  import type { IVTagProps, IVTagEmits } from './types';
  import { useBreakpointsProp } from '../../composables';
  import { VButtonEmpty } from '../Button';
  import { VIcon } from '../Icons';

  const props = defineProps<IVTagProps>();
  const emit = defineEmits<IVTagEmits>();

  const { classList } = useBreakpointsProp('v-tag', 'size', props);
</script>

<style lang="scss">
  .v-tag {
    --v-tag-gap: 0;
    --v-tag-padding: 0;
    --v-tag-padding-y: var(--v-tag-padding);
    --v-tag-padding-x: var(--v-tag-padding);
    --v-tag-bg-color: transparent;
    --v-tag-font-size: inherit;
    --v-tag-line-height: inherit;
    --v-tag-color: inherit;

    display: inline-flex;
    align-items: center;
    gap: var(--v-tag-gap);

    padding: var(--v-tag-padding-y) var(--v-tag-padding-x);
    color: var(--v-tag-color);
    background-color: var(--v-tag-bg-color);

    &__value {
      flex: 1;

      font-size: var(--v-tag-font-size);
      line-height: var(--v-tag-line-height);
    }
  }
</style>
