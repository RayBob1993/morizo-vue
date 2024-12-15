# VBreadcrumbs
Компонент `VBreadcrumbs` представляет собой навигационную цепочку, которая помогает пользователям ориентироваться в структуре сайта. Он отображает список ссылок, где каждая ссылка ведет на предыдущую страницу, а последняя ссылка — это текущая страница.

## Базовое использование
```vue
<template>
  <v-breadcrumbs :breadcrumbs="breadcrumbs"/>
</template>

<script lang="ts" setup>
  import type { IVBreadcrumb } from '#ui-types';
  
  const breadcrumbs = ref<Array<IVBreadcrumb>>([
    {
      title: 'Каталог',
      to: '/catalog'
    },
    {
      title: 'Товар',
      to: '/catalog/slug'
    }
  ]);
</script>
```

## API

### Свойства
| Имя           | Описание                                        | Тип                   | Значения                                                                   | Значение по умолчанию | Обязательно | 
|---------------|-------------------------------------------------|-----------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `breadcrumbs` | Массив объектов, представляющих хлебные крошки  | `Array<IVBreadcrumb>` | —                                                                          | `[]`                  | `false`     |
| `size`        | Размер                                          | `ISizes`              | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`       | Тема                                            | `IThemes`             | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### Типы
```typescript
interface IVBreadcrumb extends IUrlProp {
  title: string;
}

interface IVBreadcrumbProps {
  breadcrumbs: Array<IVBreadcrumb>;
}
```
