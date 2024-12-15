# VDrawer
Компонент `VDrawer` - это боковая панель, которая может быть открыта или закрыта. Она поддерживает различные настройки, такие как направление открытия, размеры, темы.

## Базовое использование
```vue
<template>
  <v-button @click="setDialogVisible">
    Модальное окно
  </v-button>

  <v-drawer
    v-model="isDialogVisible"
    title="Окно"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sapiente.
  </v-drawer>
</template>

<script lang="ts" setup>
  const [isDialogVisible, setDialogVisible] = useToggle();
</script>
```

## Scoped слоты
Слоты для вставки содержимого боковой панели. Внутри слотов доступна функция close, которая закрывает боковую панель.

```vue
<template>
  <v-button @click="setDialogVisible">
    Модальное окно
  </v-button>

  <v-drawer
    v-model="isDialogVisible"
    title="Окно"
  >
    <template #header="{ close }">
      Содержимое шапки окна
    </template>
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur est eveniet excepturi, expedita hic libero nostrum numquam obcaecati placeat.
    
    <template #footer #header="{ close }">
      Содержимое подвала окна
    </template>
  </v-drawer>
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
| `title`                 | Заголовок окна                                       | `string`  | —                                                                          | -                     | `false`     |
| `appendToBody`          | Определяет, будет ли панель добавлена в элемент body | `boolean` | —                                                                          | `true`                | `false`     |
| `size`                  | Размер                                               | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                                                 | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `direction`             | Направление открытия панели                          | `string`  | `left` , `right`, `up`, `down`                                             | `left`                | `false`     |

### События
| Имя                  | Описание                                           | Тип              |
|----------------------|----------------------------------------------------|------------------|
| `close`              | Вызывается, когда когда боковая панель закрывается | —                |
| `closed`             | Вызывается после завершения анимации закрытия      | `HTMLDivElement` |
| `open`               | Вызывается, когда когда боковая панель открывается | —                |
| `opened`             | Вызывается после завершения анимации открытия      | `HTMLDivElement` |

### Типы
```typescript
type IVDrawerDirection = 'left' | 'right' | 'up' | 'down';

type IVDrawerProps = {
  modelValue: boolean;
  appendToBody?: boolean;
  title?: string;
  direction?: IVDrawerDirection;
} & Partial<IThemeProp> & Partial<ISizeProp>
```
