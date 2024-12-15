# VDialog
Компонент `VDialog` — это модальное диалоговое окно, которое можно использовать для отображения контента поверх основного интерфейса. Он поддерживает различные настройки, такие как центрирование, размеры и темы.

## Базовое использование
```vue
<template>
  <v-button @click="setDialogVisible(true)">
    Модальное окно
  </v-button>

  <v-dialog
    v-model="isDialogVisible"
    title="Окно"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sapiente.
  </v-dialog>
</template>

<script lang="ts" setup>
  const [isDialogVisible, setDialogVisible] = useToggle();
</script>
```

## Scoped слот
Слот по умолчанию для вставки содержимого диалога. Внутри слота доступна функция close, которая закрывает диалог.

```vue
<template>
  <v-button @click="setDialogVisible(true)">
    Модальное окно
  </v-button>

  <v-dialog
    v-model="isDialogVisible"
    title="Окно"
    v-slot="{ close }"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sapiente.

    <v-button @click="close">
      Закрыть окно
    </v-button>
  </v-dialog>
</template>

<script lang="ts" setup>
  const [isDialogVisible, setDialogVisible] = useToggle();
</script>
```

## API

### Свойства
| Имя                     | Описание                                             | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно | 
|-------------------------|------------------------------------------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных                                        | `boolean` | —                                                                          | `false`               | `true`      |
| `title`                 | Заголовок окна                                       | `string`  | —                                                                          | —                     | `false`     |
| `center`                | Определяет, будет ли диалог центрирован по вертикали | `boolean` | —                                                                          | `true`                | `false`     |
| `appendToBody`          | Определяет, будет ли диалог добавлен в элемент body  | `boolean` | —                                                                          | `true`                | `false`     |
| `size`                  | Размер                                               | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                                                 | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### События
| Имя                  | Описание                                                  | Тип              |
|----------------------|-----------------------------------------------------------|------------------|
| `close`              | Вызывается, когда диалог закрывается                      | —                |
| `closed`             | Вызывается после завершения анимации закрытия             | `HTMLDivElement` |
| `open`               | Вызывается, когда диалог открывается                      | —                |
| `opened`             | Вызывается после завершения анимации открытия             | `HTMLDivElement` |

### Слоты
| Имя       | Описание                          | Scope свойства          |
|-----------|-----------------------------------|-------------------------|
| `default` | Настроить содержимое по умолчанию | `{ close: () => void }` |

### Типы
```typescript
type IVDialogProps = {
  modelValue: boolean;
  appendToBody?: boolean;
  title?: string;
  center?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVDialogEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

interface IVDialogSlots {
  default?: (props: {
    close: () => void
  }) => any;
}
```
