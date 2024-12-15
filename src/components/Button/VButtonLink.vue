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
  import { RouterLink } from 'vue-router';
  import { useBaseButtonClassList } from './useButton';

  const props = defineProps<IVButtonLinkProps>();

  const classList = useBaseButtonClassList('v-button', props);
</script>

<style lang="scss">
  @import './button';
</style>
