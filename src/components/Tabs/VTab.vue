<template>
  <div
    v-show="isActive"
    class="v-tab"
    :class="{
      'v-tab--active': isActive
    }"
  >
    <slot :is-active="isActive"/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVTabProps, IVTabContext, IVTabSlots } from './types';
  import { useTabsContext } from '../../composables';
  import { uuidv4 } from '../../utils';
  import { onUnmounted, computed, reactive } from 'vue';

  const props = defineProps<IVTabProps>();
  const slots = defineSlots<IVTabSlots>();

  const Tabs = useTabsContext();
  const isActive = computed<boolean>(() => Tabs?.modelValue.value === props.value);

  const tabContext = reactive<IVTabContext>({
    uid: uuidv4(),
    props,
    slots
  });

  Tabs?.registerTab(tabContext);

  onUnmounted(() => {
    Tabs?.unregisterTab(tabContext);
  });
</script>
