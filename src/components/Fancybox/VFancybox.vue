<template>
  <slot/>
</template>

<script setup lang="ts">
  import type { IVFancyboxProps } from './types';
  import { onMounted, onUpdated, onBeforeMount } from 'vue';
  import { Fancybox } from '@fancyapps/ui';

  import '@fancyapps/ui/dist/fancybox/fancybox.css';

  const props = defineProps<IVFancyboxProps>();

  const SELECTOR = '[data-fancybox]';

  onMounted(() => {
    Fancybox.bind(SELECTOR, props.options);
  });

  onUpdated(() => {
    Fancybox.unbind(SELECTOR);

    Fancybox.close();

    Fancybox.bind(SELECTOR, props.options);
  });

  onBeforeMount(() => {
    Fancybox.destroy();
  });
</script>
