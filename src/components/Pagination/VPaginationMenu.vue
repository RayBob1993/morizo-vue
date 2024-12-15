<template>
  <nav class="v-pagination-menu">
    <v-button-empty
      v-if="hasPrevPage"
      @click="Pagination?.onPrevPage"
    >
      Назад
    </v-button-empty>

    <ul class="v-pagination-menu__list">
      <li
        v-if="hasFirst"
        class="v-pagination-menu__list-item"
        :class="{
          'v-pagination-menu__list-item--active': currentPage === 1
        }"
      >
        <a
          class="v-pagination-menu__list-item__link"
          :href="route.path"
          @click.prevent="Pagination?.onChangePage(1)"
        >
          1
        </a>
      </li>

      <li
        v-for="page in pages"
        :key="`page-${page}`"
        class="v-pagination-menu__list-item"
        :class="{
          'v-pagination-menu__list-item--active': page === currentPage
        }"
      >
        <a
          v-if="page === 1"
          class="v-pagination-menu__list-item__link"
          :href="route.path"
          @click.prevent="Pagination?.onChangePage(page)"
        >
          {{ page }}
        </a>

        <a
          v-else
          class="v-pagination-menu__list-item__link"
          :href="`?page=${page}`"
          @click.prevent="Pagination?.onChangePage(page)"
        >
          {{ page }}
        </a>
      </li>

      <li
        v-if="hasLast"
        class="v-pagination-menu__list-item"
        :class="{
          'v-pagination-menu__list-item--active': currentPage === totalPages
        }"
      >
        <a
          class="v-pagination-menu__list-item__link"
          :href="`?page=${totalPages}`"
          @click.prevent="Pagination?.onChangePage(totalPages)"
        >
          {{ totalPages }}
        </a>
      </li>
    </ul>

    <v-button-empty
      v-if="hasNextPage"
      @click="Pagination?.onNextPage"
    >
      Далее
    </v-button-empty>
  </nav>
</template>

<script lang="ts" setup>
  import type { Maybe } from '../../types';
  import type { IVPagination } from './types';
  import { VPaginationContextKey } from '../../keys';
  import { computed, inject } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const Pagination = inject(VPaginationContextKey);

  const hasPrevPage = computed<Maybe<boolean>>(() => Pagination?.hasPrevPage.value);
  const hasNextPage = computed<Maybe<boolean>>(() => Pagination?.hasNextPage.value);
  const pager = computed<Maybe<IVPagination>>(() => Pagination?.pager.value);
  const hasFirst = computed<Maybe<boolean>>(() => Pagination?.hasFirst.value);
  const hasLast = computed<Maybe<boolean>>(() => Pagination?.hasLast.value);

  const pages = computed<Maybe<Array<number>>>(() => pager.value?.pages);
  const currentPage = computed<Maybe<number>>(() => pager.value?.currentPage);
  const totalPages = computed<number>(() => pager.value?.totalPages || 1);
</script>

<style lang="scss">
  .v-pagination-menu {
    &__list {
      display: flex;

      &-item {
        &__link {
          display: block;

          transition: var(--transition-base);
          border: 1px solid;
        }
      }
    }
  }
</style>
