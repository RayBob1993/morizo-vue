# useToast

Компонент для отправки уведомлений пользователю.

## Базовое использование
Создание простого уведомления

```vue
<template>
  <v-button
    theme="primary"
    size="medium"
    @click="click"
  >
    Показать уведомление
  </v-button>
</template>

<script lang="ts" setup>
  function click () {
    useToast({
      title: 'Заголовок',
      message: 'Привет, мир!',
      theme: 'success'
    });
  }
</script>
```

Создание уведомления отображающее html код
```vue
<template>
  <v-button
    theme="primary"
    size="medium"
    @click="click"
  >
    Показать уведомление с html
  </v-button>
</template>

<script lang="ts" setup>
  function click () {
    useToast({
      title: 'Заголовок',
      message: 'Привет, <b>мир</b>!',
      useHTML: true,
      theme: 'success'
    });
  }
</script>
```

## API

### Свойства
| Имя         | Описание                   | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно |  
|-------------|----------------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `theme`     | Тема                       | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `title`     | Заголовок                  | `string`  |                                                                            | `undefined`           | `false`     |
| `message`   | Текст                      | `string`  |                                                                            |                       | `true`      |
| `useHTML`   | Отрисовать текст как HTML  | `boolean` |                                                                            | `false`               | `false`     |
| `duration`  | Время отображения в ms     | `number`  |                                                                            | `1500`                | `false`     |
| `clearable` | Отображать кнопку закрытия | `boolean` |                                                                            | `true`                | `false`     |

### Типы
```typescript
type IVToastProps = {
  title?: string;
  message: string;
  useHTML?: boolean;
  duration?: number;
  clearable?: boolean;
} & Partial<IThemeProp>
```
