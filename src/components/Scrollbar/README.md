# VScrollbar

## Базовое использование
```vue
<template>
  <v-scrollbar
    vertical 
    horizontal
    style="max-height: 300px;"
  >
    <div style="height: 500px;">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </v-scrollbar>
</template>
```

## API

### Свойства
| Имя                      | Описание                              | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно | 
|--------------------------|---------------------------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `hidden`                 | Скрыть визуально полосу прокрутки     | `boolean` | -                                                                          | `false`               | `false`     |
| `draggable`              | Включить перетаскивание               | `boolean` | -                                                                          | `false`               | `false`     |
| `vertical`               | Вертикальный скроллбар                | `boolean` | -                                                                          | `true`                | `false`     |
| `horizontal`             | Горизонтальный скроллбар              | `boolean` | -                                                                          | `false`               | `false`     |
| `infinite-scroll-offset` | Отступ до конца скролла               | `number`  | -                                                                          | `0`                   | `false`     |
| `draggable-multiplier`   | Множитель для скорости перетаскивания | `number`  | -                                                                          | `1`                   | `false`     |
| `size`                   | Размер                                | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                  | Тема                                  | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### События
| Имя            | Описание                                                      | Тип |
|----------------|---------------------------------------------------------------|-----|
| `scroll-end-y` | Событие, вызываемое, когда скролл достиг конца по вертикали   | -   |
| `scroll-end-x` | Событие, вызываемое, когда скролл достиг конца по горизонтали | -   |

### Типы
```typescript
type IVScrollbarProps = {
  vertical?: boolean;
  horizontal?: boolean;
  draggableMultiplier?: number;
  infiniteScrollOffset?: number;
  draggable?: boolean;
  hidden?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>
```
