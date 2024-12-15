# VRadio

## Базовое использование
```vue
<template>
  <v-radio
    v-model="model"
    value="1"
  >
    Option 1
  </v-radio>

  <v-radio
    v-model="model"
    value="2"
  >
    Option 2
  </v-radio>

  <v-radio
    v-model="model"
    value="3"
  >
    Option 3
  </v-radio>

  <v-radio
    v-model="model"
    value="4"
  >
    Option 4
  </v-radio>
</template>

<script lang="ts" setup>
  import type { IVRadioValue } from '#ui-types';

  const model = ref<IVRadioValue>();
</script>
```

## API

### VRadio Свойства
| Имя                     | Описание              | Тип            | Значения                                                                    | Значение по умолчанию | Обязательно | 
|-------------------------|-----------------------|----------------|-----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных         | `IVRadioValue` | —                                                                           | `null`                | `false`     |
| `disabled`              | Блокировка поля       | `boolean`      | —                                                                           | `false`               | `false`     |
| `size`                  | Размер                | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs  | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm  | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md  | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg  | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl  | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl | `ISizes`       | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`                | `undefined`           | `false`     |
| `theme`                 | Тема                  | `IThemes`      | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning`  | `undefined`           | `false`     |

### VRadio События
| Имя                  | Описание                                                         | Тип |
|----------------------|------------------------------------------------------------------|-----|
| `change`             | Событие, вызываемое, когда переключаются значения                | —   |
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | —   |

### VRadio Слоты
| Имя        | Описание                               |
|------------|----------------------------------------|
| `default`  | Свой шаблон отображения значения radio |

### Типы
```typescript
type IVRadioValue = number | string;

type IVRadioProps = {
  modelValue: IVRadioValue;
  value: IVRadioValue;
  label?: string;
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVRadioGroupProps extends IDirectionProp {}
```
