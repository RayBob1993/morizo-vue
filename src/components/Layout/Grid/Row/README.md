# VRow

## Базовое использование
```vue
<template>
  <v-row>
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
    <v-col :span="3">Колонка 4</v-col>
  </v-row>
</template>
```

## Вертикальный отступ
```vue
<template>
  <v-row gutters-y>
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
    <v-col :span="3">Колонка 4</v-col>
  </v-row>
</template>
```

## Вертикальное выравнивание
```vue
<template>
  <v-row align="center">
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
  </v-row>
</template>
```

## Горизонтальное выравнивание
```vue
<template>
  <v-row justify="center">
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
  </v-row>
</template>
```

## Адаптивность
```vue
<template>
  <v-row 
    align="center"
    align-md="end"
    justify="center" 
    justify-md="between"
  >
    <v-col 
      :span="12" 
      :lg="4" 
      :xl="3"
    >
      Колонка 1
    </v-col>
    
    <v-col
      :span="12"
      :lg="4"
      :xl="3"
    >
      Колонка 2
    </v-col>
    
    <v-col
      :span="12"
      :lg="4"
      :xl="3"
    >
      Колонка 3
    </v-col>
    
    <v-col
      :span="12"
      :lg="4"
      :xl="3"
    >
      Колонка 4
    </v-col>
  </v-row>
</template>
```

## Изменение межколоночных отступов
Изменение отступов по x и y осям
```vue
<template>
  <v-row 
    class="custom-gap" 
    gutters-y
  >
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
  </v-row>
</template>

<style lang="scss">
  .custom-gap {
    --v-row-gutter: 20px;
  }
</style>
```

Изменение отступов отдельно по x и y осям
```vue
<template>
  <v-row 
    class="custom-gap" 
    gutters-y
  >
    <v-col :span="3">Колонка 1</v-col>
    <v-col :span="3">Колонка 2</v-col>
    <v-col :span="3">Колонка 3</v-col>
  </v-row>
</template>

<style lang="scss">
  .custom-gap {
    --v-row-gutter-x: 13px;
    --v-row-gutter-y: 5px;
  }
</style>
```

## API

### Свойства
| Имя           | Описание                              | Тип             | Значения                                        | Значение по умолчанию | 
|---------------|---------------------------------------|-----------------|-------------------------------------------------|-----------------------|
| `justify`     | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-xs`  | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-sm`  | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-md`  | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-lg`  | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-xl`  | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `justify-xxl` | -                                     | `IFlexJustify`  | `start`, `center`, `end`, `around`, `between`   | `undefined`           |
| `align`       | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-xs`    | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-sm`    | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-md`    | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-lg`    | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-xl`    | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `align-xxl`   | -                                     | `IFlexAlign`    | `start`, `center`, `end`, `baseline`, `stretch` | `undefined`           |
| `gutters-x`   | Горизонтальный отступ между колонками | `boolean`       | —                                               | `true`                |
| `gutters-y`   | Вертикальный отступ между колонками   | `boolean`       | —                                               | `false`               |
| `wrap`        | Возможность переноса колонок          | `boolean`       | —                                               | `true`                |

### Слоты
| Имя        | Описание                          | Подкомпоненты |
|------------|-----------------------------------|---------------|
| `default`  | Настроить содержимое по умолчанию | `<v-col>`     |

### Типы
```typescript
interface IVRowProps {
  justify?: IFlexJustify;
  justifyXs?: IFlexJustify;
  justifySm?: IFlexJustify;
  justifyMd?: IFlexJustify;
  justifyLg?: IFlexJustify;
  justifyXl?: IFlexJustify;
  justifyXxl?: IFlexJustify;
  align?: IFlexAlign;
  alignXs?: IFlexAlign;
  alignSm?: IFlexAlign;
  alignMd?: IFlexAlign;
  alignLg?: IFlexAlign;
  alignXl?: IFlexAlign;
  alignXxl?: IFlexAlign;
  guttersX?: boolean;
  guttersY?: boolean;
  wrap?: boolean;
}
```
