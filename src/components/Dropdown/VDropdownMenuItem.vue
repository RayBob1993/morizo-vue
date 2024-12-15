<template>
  <div
    class="v-dropdown-menu-item"
    :class="[
      {
        ...classList,
        [`v-dropdown-menu-item--theme-${theme}`]: theme
      }
    ]"
    v-bind="listeners"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { Maybe } from '../../types';
  import type { IThemes } from '../../enums';
  import { useDropdownContext, useListeners, useBreakpointsProp } from '../../composables';
  import { computed, useAttrs } from 'vue';

  const Dropdown = useDropdownContext();
  const { classList } = useBreakpointsProp('v-dropdown-menu-item', 'size', Dropdown?.props);

  const theme = computed<Maybe<IThemes>>(() => Dropdown?.props.theme);

  const listeners = useListeners(useAttrs());
</script>

<style lang="scss">
  .v-dropdown-menu-item {
    --v-dropdown-menu-item-bg-color: transparent;
    --v-dropdown-menu-item-color: inherit;
    --v-dropdown-menu-item-padding: 0;
    --v-dropdown-menu-item-padding-x: var(--v-dropdown-menu-item-padding);
    --v-dropdown-menu-item-padding-y: var(--v-dropdown-menu-item-padding);
    --v-dropdown-menu-item-font-size: inherit;
    --v-dropdown-menu-item-line-height: inherit;

    display: flex;
    align-items: center;
    padding: var(--v-dropdown-menu-item-padding-y) var(--v-dropdown-menu-item-padding-x);

    cursor: pointer;

    transition: var(--transition-base);

    background-color: var(--v-dropdown-menu-item-bg-color);

    color: var(--v-dropdown-menu-item-color);

    font-size: var(--v-dropdown-menu-item-font-size);
    line-height: var(--v-dropdown-menu-item-line-height);
  }
</style>

