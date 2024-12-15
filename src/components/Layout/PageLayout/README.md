# VPageLayout

Компонент `VPageLayout` предназначен для создания структуры страницы с возможностью отображения заголовка, хлебных крошек и основного контента. 

Он поддерживает кастомизацию через слоты, позволяя пользователю вставлять свои элементы в определенные области.

## Базовое использование
```vue
<template>
  <v-page-layout 
    title="Профиль" 
    :breadcrumbs="breadcrumbs" 
    :loading="isLoading"
  >
    <p>Основной контент страницы.</p>
  </v-page-layout>
</template>

<script lang="ts" setup>
  import type { IVBreadcrumb } from '#ui-types';
  
  const isLoading = ref(true);
  
  const breadcrumbs: Array<IVBreadcrumb> = [
    {
      url: '/',
      title: 'Главная'
    },
    {
      url: '/profile',
      title: 'Профиль'
    }
  ];
</script>
```

## API

### Свойства
| Имя           | Описание           | Тип                   | Значения | Значение по умолчанию | Обязательно |  
|---------------|--------------------|-----------------------|----------|-----------------------|-------------|
| `title`       | Заголовок          | `string`              | —        | `undefined`           | `false`     |
| `loading`     | Состояние загрузки | `boolean`             | —        | `undefined`           | `false`     |
| `breadcrumbs` | Хлебные крошки     | `Array<IVBreadcrumb>` | —        | `undefined`           | `false`     |

### Слоты
| Имя       | Описание                              |
|-----------|---------------------------------------|
| `default` | Настроить содержимое по умолчанию     |
| `body`    | Настроить содержимое контента         |
| `custom`  | Настроить содержимое всего компонента |

### Типы
```typescript
interface IVPageLayoutProps {
  title?: string;
  loading?: boolean;
  breadcrumbs?: Array<IVBreadcrumb>;
}

interface IVPageLayoutSlots {
  custom?: () => any;
  body?: () => any;
  default?: () => any;
}
```
