# VIcon

## Базовое использование
В `app.vue` добавить вставку спрайта компонентов
```vue
<template>
  <v-icons/>
</template>
```

Указать иконку из спрайта
```vue
<template>
  <v-icon icon="user"/>
</template>
```

## API

### Свойства
| Имя        | Описание              | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно | 
|------------|-----------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `icon`     | Имя иконки            | `IIcon`   | `enum IconsList`                                                           | —                     | `true`      |
| `size`     | Размер                | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`  | Размер для экрана xs  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`  | Размер для экрана sm  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`  | Размер для экрана md  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`  | Размер для экрана lg  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`  | Размер для экрана xl  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl` | Размер для экрана xxl | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`    | Тема                  | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### Типы
```typescript
interface IVIconProps extends ISizeProp, IThemeProp, IIconProp {
  view?: string;
}
```
