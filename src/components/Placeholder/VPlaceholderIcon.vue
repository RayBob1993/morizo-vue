<template>
  <v-placeholder
    class="v-placeholder-icon"
    :class="classList"
  />
</template>

<script lang="ts" setup>
  import type { ISizeProp } from '../../props';
  import VPlaceholder from './VPlaceholder.vue';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<Partial<ISizeProp>>();

  const { classList } = useBreakpointsProp('v-placeholder-icon', 'size', props);
</script>

<style lang="scss">
  .v-placeholder-icon {
    --v-placeholder-icon-size: auto;
    --v-placeholder-icon-width: var(--v-placeholder-icon-size);
    --v-placeholder-icon-height: var(--v-placeholder-icon-size);

    display: inline-block;
    vertical-align: text-bottom;
    width: var(--v-placeholder-icon-width);
    height: var(--v-placeholder-icon-height);

    @include breakpoints-prop (size) {
      &-large {
        --v-placeholder-icon-size: 24px;
      }

      &-medium {
        --v-placeholder-icon-size: 18px;
      }

      &-small {
        --v-placeholder-icon-size: 16px;
      }

      &-mini {
        --v-placeholder-icon-size: 12px;
      }
    }
  }
</style>
