# VSelect

## Базовое использование
```vue
<template>
  <v-select 
    v-model="model"
    theme="primary"
    size="medium"
    title="Выберите значение"
  >
    <v-option 
      title="js"
      value="js"
    />
    <v-option 
      title="go"
      value="go"
    />
    <v-option 
      title="php"
      value="php"
    />
    <v-option 
      title="node.js"
      value="node.js"
    />
  </v-select>
</template>

<script lang="ts" setup>
  import type { IVSelectValue } from '#ui-types';
  
  const model = ref<IVSelectValue>();
</script>
```

## API

### VSelect Свойства
| Имя                     | Описание                | Тип              | Значения                                                                   | Значение по умолчанию | Обязательно |  
|-------------------------|-------------------------|------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных           | `IVSelectValue`  | —                                                                          | -                     | `true`      |
| `title`                 | Заголовок поля          | `string`         | —                                                                          | `undefined`           | `false`     |
| `disabled`              | Блокировка поля         | `boolean`        | —                                                                          | `false`               | `false`     |
| `size`                  | Размер                  | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs    | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm    | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md    | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg    | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl    | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl   | `ISizes`         | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                    | `IThemes`        | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VSelect Слоты
| Имя        | Описание                          | Подкомпоненты |
|------------|-----------------------------------|---------------|
| `default`  | Настроить содержимое по умолчанию | `<v-option>`  |

### VSelect События
| Имя                  | Описание                                                         | Тип             |
|----------------------|------------------------------------------------------------------|-----------------|
| `change`             | Событие, вызываемое, когда переключаются значения                | `IVSelectValue` |
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | `IVSelectValue` |

### VOption Свойства
| Имя        | Описание        | Тип             | Значения | Значение по умолчанию | Обязательно |
|------------|-----------------|-----------------|----------|-----------------------|-------------|
| `title`    | Заголовок опции | `string`        | —        | `undefined`           | `false`     |
| `value`    | Значение        | `IVSelectValue` | —        | `undefined`           | `true`      |
| `disabled` | Блокировка поля | `boolean`       | —        | `false`               | `false`     |

### VOption Слоты
| Имя        | Описание                               |
|------------|----------------------------------------|
| `default`  | Свой шаблон отображения значения опции |

### Типы
```typescript
type IVOptionValue = string | number;
type IVSelectModelValue = Maybe<IVOptionValue>;

interface IVOptionProps {
  value: IVOptionValue;
  title?: string;
  disabled?: boolean;
}

interface IVOptionInstance {
  uid: string;
  props: IVOptionProps;
}

interface IVOptionSlots {
  default: (props: {
    isActive: boolean;
    isDisabled: boolean;
  }) => any;
}

type IVSelectProps = {
  modelValue: IVSelectModelValue;
  disabled?: boolean;
  title?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVSelectEmits extends IVDropdownEmits {
  (event: 'change', payload: IVSelectModelValue): void;
}

interface IVSelectContext {
  props: IVSelectProps;
  modelValue: ModelRef<IVSelectModelValue>;
  hasValue: ComputedRef<boolean>;
  isDisabled: ComputedRef<boolean>;
  onChange: (value: IVSelectModelValue) => void;
  registerOption: (option: IVOptionInstance) => void;
  unregisterOption: (option: IVOptionInstance) => void;
}

interface IVSelectInstance {
  setVisible: (payload: boolean) => void;
}

interface IVSelectExpose {
  setVisible: (payload: boolean) => void;
}
```
