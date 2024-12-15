# VCol

## Базовое использование
```vue
<template>
 <v-row>
   <v-col>
     Контент
   </v-col>
 </v-row>
</template>
```

## Указание размера колонок
```vue
<template>
 <v-row>
   <v-col :size="6">
     Контент
   </v-col>

   <v-col :size="6">
     Контент
   </v-col>
 </v-row>
</template>
```

## Указание ширины в зависимости от ширины содержимого колонки 
```vue
<template>
 <v-row>
   <v-col size="auto">
     <div style="width: 250px;">
       Ширина колонки в 250px
     </div>
   </v-col>

   <v-col size="auto">
     <div style="width: 123px">
       Ширина колонки в 123px
     </div>
   </v-col>
 </v-row>
</template>
```

## Смещение колонки
Вы можете указать количество смещений столбцов, задав значение свойства `offset`.
```vue
<template>
 <v-row>
   <v-col 
     :size="6"
     :offset="4"
   >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo.
   </v-col>
 </v-row>
</template>
```

## Сортировка колонок
Вы можете указать изменение позиций столбцов, задав значение свойства `order` основанного на css свойстве `order`. 
```vue
<template>
 <v-row>
   <v-col :size="8">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo.
   </v-col>
   
   <v-col 
     :size="4" 
     :order="1"
   >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo.
   </v-col>
 </v-row>
</template>
```

## Адаптивность размеров колонок
```vue
<template>
 <v-row>
   <v-col 
     :size="12"
     :size-md="6"
     :size-lg="4"
     :size-xl="3"
   >
     <v-text>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nemo.
     </v-text>
   </v-col>

   <v-col
     :size="12"
     :size-sm="6"
     :size-md="6"
     :size-lg="4"
     :size-xl="3"
     :size-xxl="2"
   >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nemo.
   </v-col>
 </v-row>
</template>
```

## API

### Свойства
| Имя          | Описание                     | Тип          | Значения                                         | Значение по умолчанию | Обязательно | 
|--------------|------------------------------|--------------|--------------------------------------------------|-----------------------|-------------|
| `size`       | Размер                       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-xs`    | Размер для экрана xs         | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-sm`    | Размер для экрана sm         | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-md`    | Размер для экрана md         | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-lg`    | Размер для экрана lg         | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-xl`    | Размер для экрана xl         | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `size-xxl`   | Размер для экрана xxl        | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order`      | Сортировка                   | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-xs`   | Сортировка для экрана хs     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-sm`   | Сортировка для экрана sm     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-md`   | Сортировка для экрана md     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-lg`   | Сортировка для экрана lg     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-xl`   | Сортировка для экрана xl     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `order-xxl`  | Сортировка для экрана хxl    | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset`     | Смещение                     | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-xs`  | Смещение для экрана xs       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-sm`  | Смещение для экрана sm       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-md`  | Смещение для экрана md       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-lg`  | Смещение для экрана lg       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-xl`  | Смещение для экрана xl       | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `offset-xxl` | Смещение для экрана xxl      | `IColSize`   | `IColSize`                                       | `undefined`           | `false`     |
| `align`      | Выравнивание                 | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-xs`   | Выравнивание для экрана xs   | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-sm`   | Выравнивание для экрана sm   | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-md`   | Выравнивание для экрана md   | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-lg`   | Выравнивание для экрана lg   | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-xl`   | Выравнивание для экрана xl   | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |
| `align-xxl`  | Выравнивание для экрана xxl  | `IFlexAlign` | `start`, `center`, `end`, `baseline`, `stretch`  | `undefined`           | `false`     |

### Слоты
| Имя        | Описание                          |
|------------|-----------------------------------|
| `default`  | Настроить содержимое по умолчанию |

### Типы
```typescript
type ISizeValues = 0 | 1 | 2 | 25 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type IColSize = ISizeValues | 'auto' | 'default';
type IOffsetSize = ISizeValues;

interface IVColProps {
  size?: IColSize;
  sizeXs?: IColSize;
  sizeSm?: IColSize;
  sizeMd?: IColSize;
  sizeLg?: IColSize;
  sizeXl?: IColSize;
  sizeXxl?: IColSize;
  order?: number;
  orderXs?: number;
  orderSm?: number;
  orderMd?: number;
  orderLg?: number;
  orderXl?: number;
  orderXxl?: number;
  offset?: IOffsetSize;
  offsetXs?: IOffsetSize;
  offsetSm?: IOffsetSize;
  offsetMd?: IOffsetSize;
  offsetLg?: IOffsetSize;
  offsetXl?: IOffsetSize;
  offsetXxl?: IOffsetSize;
  align?: IFlexAlign;
  alignXs?: IFlexAlign;
  alignSm?: IFlexAlign;
  alignMd?: IFlexAlign;
  alignLg?: IFlexAlign;
  alignXl?: IFlexAlign;
  alignXxl?: IFlexAlign;
}
```
