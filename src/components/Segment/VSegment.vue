<template>
  <div class="v-segment">
    <v-text
      class="v-segment__title"
      size="large"
    >
      {{ title }}
    </v-text>

    <v-text class="v-segment__description">
      {{ description }}
    </v-text>

    <div
      v-if="$slots.default"
      class="v-segment__slot"
    >
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IVSegmentProps } from './types';
  import { VText } from '../Text';

  defineProps<IVSegmentProps>();
</script>

<style lang="scss">
  .v-segment {
    text-align: center;

    &__description {
      margin-top: var(--gutter-16);

      font-weight: bold;
    }

    &__slot {
      margin-top: var(--gutter-16);
    }
  }
</style>
