<template>
  <root/>
</template>

<script lang="ts" setup>
  import type { IVTabValue, IVTabContext } from './types';
  import type { Maybe } from '../../types';
  import { VScrollbar } from '../Scrollbar';
  import { useTabsContext } from '../../composables';
  import { DirectionList } from '../../enums';
  import { computed, h } from 'vue';

  const Tabs = useTabsContext();
  const tabs = computed<Maybe<Array<IVTabContext>>>(() => Tabs?.tabs.value);

  function isActive (value: IVTabValue): boolean {
    return Tabs?.modelValue.value === value;
  }

  const root = () => {
    const listItems = tabs.value?.map(tab => {
      const active = isActive(tab.props.value);

      const title = tab.slots.title?.({
        isActive: active
      }) || tab.props.title;

      return h('li', {
        class: {
          'v-tabs-nav__list-item': true,
          'v-tabs-nav__list-item--active': isActive(tab.props.value)
        },
        onClick () {
          Tabs?.onChange(tab.props.value);
        }
      }, title);
    });

    const list = h('ul', {
      class: {
        'v-tabs-nav__list': true
      }
    }, listItems);

    const scrollbar = h(VScrollbar, {
      hidden: true,
      vertical: Tabs?.props?.direction === DirectionList.vertical,
      horizontal: Tabs?.props?.direction === DirectionList.horizontal,
      draggable: true
    }, list);

    const tabsNavChild = Tabs?.props?.scrollable
      ? scrollbar
      : list;

    return h('div', {
      class: {
        'v-tabs-nav': true
      }
    }, tabsNavChild);
  };
</script>

<style lang="scss">
  .v-tabs-nav {
    width: var(--v-tabs-nav-width);

    &__list {
      display: flex;
      flex-flow: var(--v-tabs-nav-direction) nowrap;
      gap: var(--v-tabs-nav-gap-y) var(--v-tabs-nav-gap-x);

      list-style: none;
      margin: 0;
      padding: 0;

      &-item {
        position: relative;
        flex: 0 0 auto;
        padding: var(--v-tabs-nav-item-padding-y) var(--v-tabs-nav-item-padding-x);

        font-size: var(--v-tabs-nav-font-size);
        line-height: var(--v-tabs-nav-line-height);
        color: var(--v-tabs-nav-item-color);

        background-color: var(--v-tabs-nav-item-bg);

        transition: var(--transition-base);

        cursor: pointer;
      }
    }
  }
</style>
