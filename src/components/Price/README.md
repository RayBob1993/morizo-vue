# VPrice
Компонент `VPrice` предназначен для отображения цены в формате валюты. Он поддерживает различные настройки форматирования и позволяет выделять старую цену.

## Бозовое использование
```vue
<template>
  <v-price :price="100500"/>
  
  <v-price
    old
    :price="100500"
  />
</template>
```

## API

### Свойства
| Имя        | Описание                       | Тип                        | Значения                                                                   | Значение по умолчанию                                                                        | Обязательно |  
|------------|--------------------------------|----------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------|
| `price`    | Цена, которую нужно отобразить | `string`, `number`         | -                                                                          | -                                                                                            | `true`      |
| `old`      | Является ли цена старой        | `boolean`                  | -                                                                          | -                                                                                            | `false`     |
| `size`     | Размер                         | `ISizes`                   | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`                                                                                  | `false`     |
| `theme`    | Тема                           | `IThemes`                  | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`                                                                                  | `false`     |
| `format`   | Форматирование цены            | `Intl.NumberFormatOptions` | -                                                                          | `{ minimumFractionDigits: 0, maximumFractionDigits: 2, style: 'currency', currency: 'RUB' }` | `false`     |

### Типы
```typescript
type IVPriceProps = {
  old?: boolean;
  price: string | number;
  format?: Intl.NumberFormatOptions;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVPriceExpose {
  el: Ref<Maybe<HTMLDivElement>>;
}

interface IVPriceInstance {
  el: Maybe<HTMLDivElement>;
}
```
