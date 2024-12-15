# VSegment

Компонент можно использовать для резервирования места для условно отображаемого контента.

## Базовое использование
```vue
<template>
  <ul v-if="items.length">
    <li 
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
  
  <v-segment
    v-else
    title="В корзине пусто"
    description="В корзине пока нет ни одного товара. Это недолго исправить!"
  >
    <v-button-link
      theme="danger"
      size="medium"
      url="/catalog"
    >
      Перейти в каталог
    </v-button-link>
  </v-segment>
</template>

<script setup lang="ts">
  const items = ref<Array<number>>([]);
</script>
```

## API

### Свойства
| Имя           | Описание  | Тип      | Значения  | Значение по умолчанию | Обязательно | 
|---------------|-----------|----------|-----------|-----------------------|-------------|
| `title`       | Заголовок | `string` | -         | `undefined`           | `false`     |
| `description` | Описание  | `string` | -         | `undefined`           | `false`     |

### Слоты
| Имя       | Описание                          |
|-----------|-----------------------------------|
| `default` | Настроить содержимое по умолчанию |

### Типы
```typescript
interface IVSegmentProps {
  title?: string;
  description?: string;
}

interface IVSegmentSlots {
  default?: () => any;
}
```
