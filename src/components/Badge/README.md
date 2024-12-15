# VBadge
Компонент `VBadge` представляет собой элемент интерфейса, который отображает значок или метку с дополнительным контентом. Этот компонент может использоваться для отображения уведомлений, статусов или любой другой информации, связанной с элементом.

## Базовое использование
```vue
<template>
  <v-badge :content="notificationCount">
    <v-button>Уведомления</v-button>
  </v-badge>
</template>

<script lang="ts" setup>
  const notificationCount = ref(5);
</script>
```

## Скрыть содержимое
```vue
<template>
  <v-badge 
    :content="notificationCount"
    :hidden="notificationCount === 0"
  >
    <v-button>Уведомления</v-button>
  </v-badge>
</template>

<script lang="ts" setup>
  const notificationCount = ref(0);
</script>
```

## API

### Свойства
| Имя        | Описание                                                                                     | Тип                | Значения                                                                   | Значение по умолчанию | Обязательно |  
|------------|----------------------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `size`     | Размер                                                                                       | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`  | Размер для экрана xs                                                                         | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`  | Размер для экрана sm                                                                         | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`  | Размер для экрана md                                                                         | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`  | Размер для экрана lg                                                                         | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`  | Размер для экрана xl                                                                         | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl` | Размер для экрана xxl                                                                        | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`    | Тема                                                                                         | `IThemes`          | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `content`  | Содержимое значка, которое будет отображаться внутри него.                                   | `string`, `number` | —                                                                          | `undefined`           | `false`     |                                                                                            | 
| `hidden`   | Указывает, следует ли скрыть содержимое значка. Если true, содержимое не будет отображаться. | `boolean`          | —                                                                          | `undefined`           | `false`     |

### Типы
```typescript
type IVBadgeProps = {
  content?: string | number;
  hidden?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>
```
