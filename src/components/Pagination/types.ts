import type { ComputedRef } from 'vue';

export interface IVPagination {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: Array<number>;
}

export interface IVPaginationProps {
  total: number;
  currentPage: number;
  perPage: number;
  pageRange?: number;
  visibleMenu?: boolean;
  visibleMoreButton?: boolean;
}

export interface IVPaginationEmits {
  (event: 'change', payload: number): void;
  (event: 'load', payload: number): void;
}

export interface IVPaginationContext {
  hasPrevPage: ComputedRef<boolean>;
  hasNextPage: ComputedRef<boolean>;
  pager: ComputedRef<IVPagination>;
  hasFirst: ComputedRef<boolean>;
  hasLast: ComputedRef<boolean>;
  onChangePage: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}
