<template>
  <div class="v-pagination">
    <v-button
      v-if="isVisibleMoreButton"
      @click="onLoadMore"
    >
      Показать еще
    </v-button>

    <v-pagination-menu v-if="visibleMenu"/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVPaginationProps, IVPaginationEmits, IVPagination } from './types';
  import createPagination from './createPagination';
  import { VButton } from '../Button';
  import { VPaginationContextKey } from '../../keys';
  import { provide, computed } from 'vue';

  const props = withDefaults(defineProps<IVPaginationProps>(), {
    pageRange: 3,
    visibleMenu: true,
    visibleMoreButton: true
  });

  const emit = defineEmits<IVPaginationEmits>();

  const VPaginationMenu = defineAsyncComponent(() => import('./VPaginationMenu.vue'));

  const pager = computed<IVPagination>(() => createPagination(props.total, props.currentPage, props.perPage, props.pageRange));
  const hasFirst = computed<boolean>(() => pager.value.startPage > 1);
  const hasLast = computed<boolean>(() => pager.value.endPage < pager.value.totalPages);
  const hasPrevPage = computed<boolean>(() => props.currentPage > 1);
  const hasNextPage = computed<boolean>(() => props.currentPage < pager.value.totalPages);
  const prevPage = computed<number>(() => {
    return hasPrevPage.value
      ? props.currentPage - 1
      : 1;
  });
  const nextPage = computed<number>(() => {
    return hasNextPage.value
      ? props.currentPage + 1
      : pager.value.totalPages;
  });

  const isVisibleMoreButton = computed<boolean>(() => props.visibleMoreButton && props.currentPage < pager.value.totalPages);

  function onChangePage (page: number) {
    emit('change', page);
  }

  function onLoadMore () {
    if (hasNextPage.value) {
      emit('load', nextPage.value);
    }
  }

  function onNextPage () {
    if (hasNextPage.value) {
      onChangePage(nextPage.value);
    }
  }

  function onPrevPage () {
    if (hasPrevPage.value) {
      onChangePage(prevPage.value);
    }
  }

  provide(VPaginationContextKey, {
    hasPrevPage,
    hasNextPage,
    pager,
    hasFirst,
    hasLast,
    onChangePage,
    onNextPage,
    onPrevPage
  });
</script>

<style lang="scss">
  .v-pagination {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
</style>
