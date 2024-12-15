# VSection

## Базовое использование
```vue
<template>
  <v-section title="Заголовок секции">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sunt?
  </v-section>
</template>
```

## API

### Свойства
| Имя     | Описание  | Тип      | Значения   | Значение по умолчанию | Обязательно |
|---------|-----------|----------|------------|-----------------------|-------------|
| `title` | Заголовок | `string` | -          | `undefined`           | `false`     |

### Слоты
| Имя       | Описание                          |
|-----------|-----------------------------------|
| `default` | Настроить содержимое по умолчанию |
| `footer`  | Настроить содержимое подвала      |

### Типы
```typescript
interface IVSectionProps {
  title?: string;
}

interface IVSectionSlots {
  default?: () => any;
  footer?: () => any;
}
```
