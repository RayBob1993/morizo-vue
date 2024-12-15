# VInputMask

## Базовое использование
```vue
<template>
  <v-input-mask 
    v-model="model"
    :mask="{
      mask: '99.99.9999'
    }"
  />
</template>

<script lang="ts" setup>
  const model = ref<string>();
</script>
```

## Маска для телефона
```vue
<template>
  <v-input-mask 
    v-model="model"
    mask-type="phone"
  />
</template>

<script lang="ts" setup>
  const model = ref<string>('+79529999999');
</script>
```

## Маска для даты
```vue
<template>
  <v-input-mask 
    v-model="model"
    mask-type="date"
  />
</template>

<script lang="ts" setup>
  const model = ref<string>('22.08.2024');
</script>
```

## API

### Свойства
| Имя                     | Описание                 | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно |   
|-------------------------|--------------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных            | `string`  | —                                                                          | `undefined`           | `false`     |
| `size`                  | Размер                   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs     | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm     | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md     | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg     | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl     | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl    | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                     | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `disabled`              | Блокировка поля          | `boolean` | —                                                                          | `false`               | `false`     |
| `mask`                  | Опции для маски          | `object`  | `Inputmask.Options`                                                        | `{}`                  | `false`     |
| `mask-type`             | Заготовленные типы масок | `string`  | `phone`, `date`                                                            | `undefined`           | `false`     |

### События
| Имя                  | Описание                                                         | Тип |
|----------------------|------------------------------------------------------------------|-----|
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | —   |

### Типы
```typescript
interface IVInputMaskProps extends Omit<IVInputProps, 'type'> {
  mask?: Inputmask.Options;
  maskType?: keyof typeof MaskTypesList;
}
```
