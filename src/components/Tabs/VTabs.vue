<template>
  <div
    class="v-tabs"
    :class="{
      ...classList,
      [`v-tabs--theme-${theme}`]: theme
    }"
  >
    <v-tabs-nav/>

    <div class="v-tabs__content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IVTabContext, IVTabsModelValue, IVTabsProps, IVTabsEmits } from './types';
  import VTabsNav from './VTabsNav.vue';
  import { VTabsContextKey } from '../../keys';
  import { DirectionList } from '../../enums';
  import { useBreakpointsProp } from '../../composables';
  import { ref, provide } from 'vue';

  const props = withDefaults(defineProps<IVTabsProps>(), {
    scrollable: true,
    direction: DirectionList.horizontal
  });

  const emit = defineEmits<IVTabsEmits>();

  const modelValue = defineModel<IVTabsModelValue>({
    required: true
  });

  const { classList } = useBreakpointsProp('v-tabs', 'size', props);

  const tabs = ref<Array<IVTabContext>>([]);

  function onChange (value: IVTabsModelValue) {
    modelValue.value = value;

    emit('change', value);
  }

  function registerTab (newTab: IVTabContext) {
    if (!tabs.value.find(tab => tab.uid === newTab.uid)) {
      tabs.value.push(newTab);
    }
  }

  function unregisterTab (oldTab: IVTabContext) {
    tabs.value = tabs.value.filter(tab => tab.uid !== oldTab.uid);
  }

  provide(VTabsContextKey, {
    props,
    modelValue,
    tabs,
    onChange,
    registerTab,
    unregisterTab
  });
</script>

<style lang="scss">
  .v-tabs {
    --v-tabs-gap: 0;
    --v-tabs-gap-x: var(--v-tabs-gap);
    --v-tabs-gap-y: var(--v-tabs-gap);
    --v-tabs-direction: none;
    --v-tabs-nav-direction: none;
    --v-tabs-nav-width: auto;
    --v-tabs-nav-gap: 0;
    --v-tabs-nav-gap-y: var(--v-tabs-nav-gap);
    --v-tabs-nav-gap-x: var(--v-tabs-nav-gap);
    --v-tabs-nav-item-padding-y: 0;
    --v-tabs-nav-item-padding-x: 0;
    --v-tabs-nav-item-font-size: inherit;
    --v-tabs-nav-item-line-height: inherit;
    --v-tabs-nav-item-bg: transparent;
    --v-tabs-nav-item-color: inherit;

    display: flex;
    flex-flow: var(--v-tabs-direction) wrap;
    gap: var(--v-tabs-gap-x) var(--v-tabs-gap-y);

    &--direction {
      &-vertical {
        --v-tabs-nav-width: 400px;
        --v-tabs-direction: row;
        --v-tabs-nav-direction: column;
      }

      &-horizontal {
        --v-tabs-direction: column;
        --v-tabs-nav-direction: row;
      }
    }

    &__content {
      flex: 1;
    }
  }
</style>
