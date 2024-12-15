# VContainer

Компонент `VContainer` представляет собой контейнер для размещения других элементов пользовательского интерфейса. 

Он обеспечивает центрирование содержимого и управляет отступами, что позволяет создавать аккуратные и структурированные макеты.

Компонент поддерживает опцию "широкого" контейнера, которая позволяет расширять его ширину на всю доступную область.

## Базовое использование
```vue
<template>
  <v-container>
    Контент
  </v-container>
</template>
```

## На всю ширину
```vue
<template>
  <v-container wide>
    Контент
  </v-container>
</template>
```

## API

### Свойства
| Имя    | Описание                | Тип       | Значения | Значение по умолчанию | Обязательно | 
|--------|-------------------------|-----------|----------|-----------------------|-------------|
| `wide` | Растянуть на всю ширину | `boolean` | —        | `false`               | `false`     |

### Слоты
| Имя        | Описание                          |
|------------|-----------------------------------|
| `default`  | Настроить содержимое по умолчанию |

### Типы
```typescript
interface IVContainerProps {
  wide?: boolean;
}
```