# VLink
Компонент для отображения отформатированной ссылки.

## Базовое использование
```vue
<template>
  <v-link url="/">
    Привет, мир!
  </v-link>
</template>
```

## Размеры
Используйте свойство `size`, чтобы установить дополнительные размеры

```vue
<template>
  <v-link url="/">Default</v-link>
  
  <v-link 
    url="/"
    size="mini"
  >
    Mini
  </v-link>

  <v-link 
    url="/"
    size="small"
  >
    Small
  </v-link>

  <v-link 
    url="/"
    size="medium"
  >
    Medium
  </v-link>

  <v-link 
    url="/"
    size="large"
  >
    Large
  </v-link>

  <v-link 
    url="/"
    size="big"
  >
    Big
  </v-link>

  <v-link 
    url="/"
    size="huge"
  >
    Huge
  </v-link>
  
  <v-link 
    url="/"
    size="massive"
  >
    Massive
  </v-link>
</template>
```

## API

### Свойства

| Имя         | Описание                | Тип                | Значения                                                                   | Значение по умолчанию | Обязательно |   
|-------------|-------------------------|--------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `size`      | Размер                  | `ISizes`           | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`   | Размер для экрана xs    | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `size-sm`   | Размер для экрана sm    | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `size-md`   | Размер для экрана md    | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `size-lg`   | Размер для экрана lg    | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `size-xl`   | Размер для экрана xl    | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `size-xxl`  | Размер для экрана xxl   | `ISizes`           | `ISizes`                                                                   | `undefined`           | `false`     |
| `theme`     | Тема                    | `IThemes`          | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `url`       | Ссылка                  | `RouteLocationRaw` | -                                                                          | `undefined`           | `false`     |
| `underline` | Подчеркивание           | `boolean`          | -                                                                          | `false`               | `false`     |
| `uppercase` | Верхний регистр         | `boolean`          | -                                                                          | `false`               | `false`     |
| `target`    | Правило открытия ссылки | `ITarget`          | `_blank`, `_parent`, `_self`, `_top`                                       | `undefined`           | `false`     |

### Типы
```typescript
type IVLinkProps = {
  underline?: boolean;
  uppercase?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp> & IUrlProp & Partial<ITargetProp>
```
