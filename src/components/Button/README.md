# VButton

## Базовое использование
```vue
<template>
  <v-button>
    Кнопка
  </v-button>
</template>
```

## Темы
```vue
<template>
  <v-button theme="primary">
    Кнопка
  </v-button>
</template>
```

## Размеры
```vue
<template>
  <v-button size="medium">
    Кнопка
  </v-button>
</template>
```

## Загрузка
```vue
<template>
  <v-button loading>
    Кнопка
  </v-button>
</template>
```

## Блокировка
```vue
<template>
  <v-button disabled>
    Кнопка
  </v-button>
</template>
```

## На всю ширину
```vue
<template>
  <v-button wide>
    Кнопка
  </v-button>
</template>
```

## Прозрачная с рамкой
```vue
<template>
  <v-button wide>
    Кнопка
  </v-button>
</template>
```

## Кнопка ссылка
```vue
<template>
  <v-button-link url="/">
    Кнопка
  </v-button-link>
</template>
```

## Группировка кнопок
```vue
<template>
  <v-button-group direction="horizontal">
    <v-button-link url="/">
      Кнопка
    </v-button-link>

    <v-button-link url="/">
      Кнопка
    </v-button-link>

    <v-button-link url="/">
      Кнопка
    </v-button-link>
  </v-button-group>
</template>
```

## Пустая кнопка
```vue
<template>
  <v-button-empty>
    Кнопка
  </v-button-empty>
</template>
```

## API

### VButton Свойства
| Имя        | Описание                                                        | Тип         | Значения                                                                   | Значение по умолчанию | Обязательно | 
|------------|-----------------------------------------------------------------|-------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `loading`  | Загрузчик                                                       | `boolean`   | —                                                                          | `false`               | `false`     |
| `plain`    | Свойство сделает фон кнопки прозрачным                          | `boolean`   | —                                                                          | `false`               | `false`     |
| `wide`     | Свойство заставит кнопку соответствовать ее родительской ширине | `boolean`   | —                                                                          | `false`               | `false`     |
| `disabled` | Блокировка кнопки                                               | `boolean`   | —                                                                          | `false`               | `false`     |
| `size`     | Размер                                                          | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`  | Размер для экрана xs                                            | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`  | Размер для экрана sm                                            | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`  | Размер для экрана md                                            | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`  | Размер для экрана lg                                            | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`  | Размер для экрана xl                                            | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl` | Размер для экрана xxl                                           | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`    | Тема                                                            | `IThemes`   | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VButtonLink Свойства
| Имя        | Описание                                                        | Тип                 | Значения                                                                   | Значение по умолчанию | Обязательно | 
|------------|-----------------------------------------------------------------|---------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `url`      | URL адрес для перехода                                          | `RouteLocationRaw`  | —                                                                          | `false`               | `true`      |
| `plain`    | Свойство сделает фон кнопки прозрачным                          | `boolean`           | —                                                                          | `false`               | `false`     |
| `wide`     | Свойство заставит кнопку соответствовать ее родительской ширине | `boolean`           | —                                                                          | `false`               | `false`     |
| `size`     | Размер                                                          | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`  | Размер для экрана xs                                            | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`  | Размер для экрана sm                                            | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`  | Размер для экрана md                                            | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`  | Размер для экрана lg                                            | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`  | Размер для экрана xl                                            | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl` | Размер для экрана xxl                                           | `ISizes`            | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`    | Тема                                                            | `IThemes`           | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VButtonGroup Свойства
| Имя         | Описание           | Тип          | Значения                 | Значение по умолчанию | Обязательно | 
|-------------|--------------------|--------------|--------------------------|-----------------------|-------------|
| `direction` | Направление группы | `IDirection` | `horizontal`, `vertical` | —                     | `true`      |

### Типы
```typescript
type IButtonBase = {
  plain?: boolean;
  wide?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVButtonProps extends IButtonBase {
  loading?: boolean;
  disabled?: boolean;
}

interface IVButtonLinkProps extends IButtonBase, IUrlProp {}

interface IVButtonGroupProps extends IDirectionProp {}
```
