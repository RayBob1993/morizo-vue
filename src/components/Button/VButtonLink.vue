<template>
  <router-link
    :to="url"
    :target="target"
    class="v-button-link"
    :class="classList"
  >
    <slot/>
  </router-link>
</template>

<script lang="ts" setup>
  import type { IVButtonLinkProps } from './types';
  import { useBaseButtonClassList } from './useButton';
  import { RouterLink } from 'vue-router';

  const props = defineProps<IVButtonLinkProps>();

  const classList = useBaseButtonClassList('v-button', props);
</script>

<style lang="scss">
  @import './button';
</style>
