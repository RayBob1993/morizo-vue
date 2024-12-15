<template>
  <nav
    class="v-breadcrumbs"
    aria-label="Breadcrumb"
  >
    <template
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="`breadcrumb-${index}`"
    >
      <router-link
        v-if="!isLast(index)"
        class="v-breadcrumbs__item"
        :to="breadcrumb.url"
      >
        {{ breadcrumb.title }}
      </router-link>

      <span
        v-else
        class="v-breadcrumbs__item"
      >
        {{ breadcrumb.title }}
      </span>

      <v-icon
        v-if="isSeparatorVisible(index)"
        theme="secondary"
        class="v-breadcrumbs__separator"
        icon="arrow-right"
      />
    </template>
  </nav>
</template>

<script lang="ts" setup>
  import type { IVBreadcrumbProps } from './types';
  import { RouterLink } from 'vue-router';
  import { VIcon } from '../Icons';

  const props = defineProps<IVBreadcrumbProps>();

  function isSeparatorVisible (index: number): boolean {
    return index < (props.breadcrumbs.length - 1);
  }

  function isLast (index: number): boolean {
    return (props.breadcrumbs.length - 1) === index;
  }
</script>

<style lang="scss">
  .v-breadcrumbs {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    &__item {
      &.router-link-exact-active {
        font-weight: 700;
      }
    }

    &__separator {
      margin-right: var(--gutter-6);
      margin-left: var(--gutter-6);
      width: 6px;
      height: 6px;
    }
  }
</style>
