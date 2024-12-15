# VText

Компонент для отображения отформатированного текста.

## Базовое использование
Используйте свойство `theme`, чтобы установить дополнительные темы

```vue
<template>
  <v-text>Default</v-text>
  
  <v-text theme="primary">Primary</v-text>

  <v-text theme="secondary">Secondary</v-text>

  <v-text theme="tertiary">Tertiary</v-text>

  <v-text theme="danger">Danger</v-text>

  <v-text theme="success">Success</v-text>

  <v-text theme="warning">Warning</v-text>
</template>
```

## Размеры
Используйте свойство `size`, чтобы установить дополнительные размеры

```vue
<template>
  <v-text>Default</v-text>
  
  <v-text size="mini">Mini</v-text>

  <v-text size="small">Small</v-text>

  <v-text size="medium">Medium</v-text>

  <v-text size="large">Large</v-text>

  <v-text size="big">Big</v-text>

  <v-text size="huge">Huge</v-text>
  
  <v-text size="massive">Massive</v-text>
</template>
```

## Теги
Используйте свойство `tag` для переопределения элемента

```vue
<template>
  <v-text tag="p">Default</v-text>
  
  <v-text tag="b">Mini</v-text>

  <v-text tag="i">Small</v-text>

  <v-text tag="sub">Medium</v-text>

  <v-text tag="sup">Large</v-text>

  <v-text tag="ins">Big</v-text>

  <v-text tag="del">Huge</v-text>
  
  <v-text tag="mark">Massive</v-text>
</template>
```

## HTML контент
```vue
<template>
  <v-text :content="htmlContent"/>
</template>

<script lang="ts" setup>
  const htmlContent = ref('<b>Привет, мир!</b>');
</script>
```

## API

### Свойства
| Имя          | Описание                            | Тип                           | Значения                                                                   | Значение по умолчанию | Обязательно | 
|--------------|-------------------------------------|-------------------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `tag`        | Имя тега, в котором выведется текст | `keyof HTMLElementTagNameMap` | -                                                                          | `div`                 | `false`     |
| `uppercase`  | Верхний регистр                     | `boolean`                     | -                                                                          | `false`               | `false`     |
| `weight`     | Жирность                            | `string`                      | `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`              | `undefined`           | `false`     |
| `content`    | Вывод контента через v-html         | `string`                      | -                                                                          | `undefined`           | `false`     |
| `size`       | Размер                              | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`    | Размер для экрана xs                | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`    | Размер для экрана sm                | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`    | Размер для экрана md                | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`    | Размер для экрана lg                | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`    | Размер для экрана xl                | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`   | Размер для экрана xxl               | `ISizes`                      | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`      | Тема                                | `IThemes`                     | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `align`      | Расположение текста                 | `ITextAlign`                  | `left`, `center`, `right`                                                  | `undefined`           | `false`     |
| `family`     | Шрифт                               | `IFamily`                     | `roboto`                                                                   | `roboto`              | `false`     |

### Типы
```typescript
type IVTextProps = {
  uppercase?: boolean;
  content?: string | number;
} & Partial<IThemeProp> & Partial<ISizeProp> & Partial<ITagProp> & Partial<IWeightProp> & Partial<IFamilyProp> & Partial<IAlignProp>;
```
