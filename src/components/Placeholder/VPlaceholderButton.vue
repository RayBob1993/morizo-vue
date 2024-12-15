<template>
  <v-placeholder
    class="v-placeholder-button"
    :class="{
      ...classList,
      'v-placeholder-button--wide': wide
    }"
  />
</template>

<script lang="ts" setup>
  import type { ISizeProp } from '../../props';
  import VPlaceholder from './VPlaceholder.vue';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<{
    wide?: boolean;
  } & Partial<ISizeProp>>();

  const { classList } = useBreakpointsProp('v-placeholder-button', 'size', props);
</script>

<style lang="scss">
  .v-placeholder-button {
    display: inline-flex;

    &--wide {
      width: 100%;
    }
  }
</style>
