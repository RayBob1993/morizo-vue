<template>
  <div
    class="v-placeholder-text"
    :class="classList"
  >
    <v-placeholder class="v-placeholder-text__content"/>
  </div>
</template>

<script setup lang="ts">
  import type { ISizeProp } from '../../props';
  import VPlaceholder from './VPlaceholder.vue';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<Partial<ISizeProp>>();

  const { classList } = useBreakpointsProp('v-placeholder-text', 'size', props);
</script>

<style lang="scss">
  .v-placeholder-text {
    --v-placeholder-text-padding-y: 0;
    --v-placeholder-text-content-height: 0;

    padding-top: var(--v-placeholder-text-padding-y);
    padding-bottom: var(--v-placeholder-text-padding-y);

    @include breakpoints-prop (size) {
      &-massive {
        --v-placeholder-text-content-height: var(--font-size-massive);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-massive) - var(--font-size-massive)) / 2);
      }

      &-huge {
        --v-placeholder-text-content-height: var(--font-size-huge);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-huge) - var(--font-size-huge)) / 2);
      }

      &-big {
        --v-placeholder-text-content-height: var(--font-size-big);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-big) - var(--font-size-big)) / 2);
      }

      &-large {
        --v-placeholder-text-content-height: var(--font-size-large);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-large) - var(--font-size-large)) / 2);
      }

      &-medium {
        --v-placeholder-text-content-height: var(--font-size-medium);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-medium) - var(--font-size-medium)) / 2);
      }

      &-small {
        --v-placeholder-text-content-height: var(--font-size-small);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-small) - var(--font-size-small)) / 2);
      }

      &-mini {
        --v-placeholder-text-content-height: var(--font-size-mini);
        --v-placeholder-text-padding-y: calc(calc(var(--line-height-mini) - var(--font-size-mini)) / 2);
      }
    }

    &__content {
      height: var(--v-placeholder-text-content-height);
    }
  }
</style>
