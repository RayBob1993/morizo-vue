# VPagination

## Базовое использование
```vue
<template>
  <v-pagination
    :total="pagination.total"
    :current-page="pagination.currenPage"
    :per-page="pagination.perPage"
    @page-load="onLoadPage"
    @page-change="onChangePage"
  />

</template>

<script lang="ts" setup>
  const pagination = ref({
    total: 100500,
    currenPage: 1,
    perPage: 10
  });

  function onLoadPage (page: number) {
    console.log(`Подгрузить данные страницы ${page}`);
  }
  
  function onChangePage (page: number) {
    console.log(`Перейти на страницу ${page}`);
  }
</script>
```

## API

### Свойства
| Имя             | Описание               | Тип      | Значения | Значение по умолчанию | 
|-----------------|------------------------|----------|----------|-----------------------|
| `total`         | Общее кол-во элементов | `number` | -        | -                     |
| `current-page`  | Текущая страница       | `number` | -        | -                     |
| `per-page`      | Элементов на странице  | `number` | -        | -                     |

### События
| Имя           | Описание                      | Тип      | 
|---------------|-------------------------------|----------|
| `page-load`   | Событие подгрузки элементов   | `number` |
| `page-change` | Событие переходна на страницу | `number` |

### Типы
```typescript
interface IVPagination {
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

interface IVPaginationProps {
  total: number;
  currentPage: number;
  perPage: number;
  pageRange?: number;
  visibleMenu?: boolean;
  visibleMoreButton?: boolean;
}

interface IVPaginationContext {
  hasPrevPage: ComputedRef<boolean>;
  hasNextPage: ComputedRef<boolean>;
  pager: ComputedRef<IVPagination>;
  hasFirst: ComputedRef<boolean>;
  hasLast: ComputedRef<boolean>;
  onChangePage: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}
```
