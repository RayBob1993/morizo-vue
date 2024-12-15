# VCheckbox

## Базовое использование

### Множественный выбор
```vue
<template>
  <v-checkbox 
    v-model="model" 
    value="1"
  >
    Option 1
  </v-checkbox>

  <v-checkbox 
    v-model="model" 
    value="2"
  >
    Option 2
  </v-checkbox>

  <v-checkbox 
    v-model="model" 
    value="3"
  >
    Option 3
  </v-checkbox>

  <v-checkbox 
    v-model="model" 
    value="4"
  >
    Option 4
  </v-checkbox>
</template>

<script lang="ts" setup>
  import type { IVCheckboxModelValue } from '#ui-types';
  
  const model = ref<IVCheckboxModelValue>([]);
</script>
```

### Булево значение
```vue
<template>
  <v-checkbox v-model="model1">
    Option 1
  </v-checkbox>

  {{ model1 }}

  <v-checkbox v-model="model2">
    Option 1
  </v-checkbox>

  {{ model2 }}
</template>

<script lang="ts" setup>
  import type { IVCheckboxModelValue } from '#ui-types';
  
  const model1 = ref<IVCheckboxModelValue>(false);
  const model2 = ref<IVCheckboxModelValue>(false);
</script>
```

## API

### VCheckbox Свойства
| Имя                     | Описание                | Тип                    | Значения                                                                   | Значение по умолчанию | Обязательно |  
|-------------------------|-------------------------|------------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных           | `IVCheckboxModelValue` | —                                                                          | `false`               | `true`      |
| `value`                 | Значение поля           | `IVCheckboxValue`      | —                                                                          | `false`               | `false`     |
| `disabled`              | Блокировка поля         | `boolean`              | —                                                                          | `false`               | `false`     |
| `size`                  | Размер                  | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs    | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm    | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md    | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg    | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl    | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl   | `ISizes`               | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                    | `IThemes`              | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VCheckbox События
| Имя                  | Описание                                                         | Тип                    |
|----------------------|------------------------------------------------------------------|------------------------|
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | `IVCheckboxModelValue` |

### VCheckbox Слоты
| Имя        | Описание                                  |
|------------|-------------------------------------------|
| `default`  | Свой шаблон отображения значения checkbox |

### Типы
```typescript
type IVCheckboxValue = number | string | boolean;
type IVCheckboxModelValue = IVCheckboxValue | Array<number | string>;

type IVCheckboxProps = {
  modelValue: IVCheckboxModelValue;
  value?: IVCheckboxValue;
  label?: string;
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVCheckboxGroupProps extends IDirectionProp {}
```
