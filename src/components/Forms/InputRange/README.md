# VInputRange

## Базовое использование
```vue
<template>
  <v-input-range v-model="model"/>
</template>

<script lang="ts" setup>
  import type { IVRangeValue } from '#ui-types';
  
  const model = ref<IVRangeValue>({
    min: 0,
    max: 100500
  });
</script>
```

## API

### Свойства
| Имя                     | Описание                         | Тип             | Значения                                                                   | Значение по умолчанию                                 | 
|-------------------------|----------------------------------|-----------------|----------------------------------------------------------------------------|-------------------------------------------------------|
| `model-value / v-model` | Модель данных                    | `IVRangeValue`  | `{ min: 0, max: 0 }`                                                       | `{ min: 0, max: 0 }`                                  |
| `min`                   | Минимальное значение диапазона   | `number`        | —                                                                          | `0`                                                   |
| `max`                   | Максимальное значение диапазона  | `number`        | —                                                                          | `0`                                                   |
| `step`                  | Шаг                              | `number`        | —                                                                          | `1`                                                   |
| `disabled`              | Блокировка поля                  | `boolean`       | —                                                                          | `false`                                               |
| `size`                  | Размер                           | `ISizes`,       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`                                           |
| `theme`                 | Тема                             | `IThemes`,      | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`                                           |
| `format`                | Форматировани выводимых значений | `IVRangeFormat` | `{ prefixFrom: 'от ', prefixTo: 'до ', suffix: '₽' }`                      | `{ prefixFrom: 'от ', prefixTo: 'до ', suffix: '₽' }` |

### События
| Имя                  | Описание                                                         | Тип                            |
|----------------------|------------------------------------------------------------------|--------------------------------|
| `change`             | Событие, вызываемое, когда изменяется значение                   | `{ min: Number, max: Number }` |
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | —                              |

### Типы
```typescript
interface IVRangeValue {
  min: number | null | undefined;
  max: number | null | undefined;
}

interface IVRangeFormat {
  prefixFrom?: string;
  prefixTo?: string;
  suffix?: string;
}

type IVInputRangeProps = {
  modelValue: IVRangeValue;
  min?: number;
  max?: number;
  disabled?: boolean;
  step?: number;
  format?: IVRangeFormat;
} & Partial<IThemeProp> & Partial<ISizeProp>
```
