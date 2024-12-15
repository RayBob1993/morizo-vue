<template>
  <slot/>
</template>

<script lang="ts" setup>
  import type { IVConfigProviderProps } from './types';
  import { VConfigProviderContextKey } from '../../keys';
  import { ru } from '../../locale';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVConfigProviderProps>(), {
    locale: () => ru,
    direction: 'ltr'
  });

  provide(VConfigProviderContextKey, props);
</script>
