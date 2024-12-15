<template>
  <v-placeholder
    class="v-placeholder-input"
    :class="classList"
  />
</template>

<script lang="ts" setup>
  import type { ISizeProp } from '../../props';
  import VPlaceholder from './VPlaceholder.vue';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<Partial<ISizeProp>>();

  const { classList } = useBreakpointsProp('v-placeholder-input', 'size', props);
</script>
