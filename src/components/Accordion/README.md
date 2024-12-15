# VAccordion

## Базовое использование
Вы можете раскрывать несколько панелей. Для этого достаточно указать значение по умолчанию в виде пустого массива
```vue
<template>
  <v-accordion v-model="activeAccordion">
    <v-accordion-item
      title="Заголовок 1"
      value="accordion-1"
    >
      Контент 1
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 2
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 3
    </v-accordion-item>
  </v-accordion>
</template>

<script lang="ts" setup>
  import type { IVAccordionModelValue } from '#ui-types';

  const activeAccordion = ref<IVAccordionModelValue>([]);
</script>
```

## Аккордион
В режиме гармошки одновременно можно развернуть только одну панель.

```vue
<template>
  <v-accordion v-model="activeAccordion">
    <v-accordion-item
      title="Заголовок 1"
      value="accordion-1"
    >
      Контент 1
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 2
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 3
    </v-accordion-item>
  </v-accordion>
</template>

<script lang="ts" setup>
  import type { IVAccordionModelValue } from '#ui-types';

  const activeAccordion = ref<IVAccordionModelValue>();
</script>
```

## Кастомный заголовок
Помимо использования `title` атрибута, вы можете настроить заголовок панели с именованными слотами, что делает возможным добавление пользовательского содержимого.

```vue
<template>
  <v-accordion v-model="activeAccordion">
    <v-accordion-item value="accordion-1">
      <template #header>
        Кастомное содержимое
      </template>
      
      Контент 1
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 2
    </v-accordion-item>

    <v-accordion-item
      title="Заголовок 2"
      value="accordion-3"
    >
      Контент 3
    </v-accordion-item>
  </v-accordion>
</template>

<script lang="ts" setup>
  import type { IVAccordionModelValue } from '#ui-types';

  const activeAccordion = ref<IVAccordionModelValue>();
</script>
```

## API

### VAccordion Свойства
| Имя                     | Описание                | Тип                     | Значения                                                                   | Значение по умолчанию | Обязательно | 
|-------------------------|-------------------------|-------------------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных           | `IVAccordionModelValue` | —                                                                          | `undefined`           | `true`      |
| `size`                  | Размер                  | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs    | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm    | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md    | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg    | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl    | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl   | `ISizes`                | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                    | `IThemes`               | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VAccordion Слоты
| Имя       | Описание                          | Подкомпоненты        |
|-----------|-----------------------------------|----------------------|
| `default` | Настроить содержимое по умолчанию | `<v-accordion-item>` |

### VAccordion События
| Имя                  | Описание                                                  | Тип                     |
|----------------------|-----------------------------------------------------------|-------------------------|
| `change`             | Событие, вызываемое, когда переключаются вкладки          | `IVAccordionValue`      |
| `update:model-value` | Событие, вызываемое, когда у компонента изменилась модель | `IVAccordionModelValue` |

### VAccordionItem Свойства
| Имя     | Описание          | Тип                | Значения | Значение по умолчанию | Обязательно |  
|---------|-------------------|--------------------|----------|-----------------------|-------------|
| `title` | Заголовок вкладки | `string`           | —        | `undefined`           | `false`     |
| `value` | Значение          | `IVAccordionValue` | —        | `undefined`           | `true`      |

### VAccordionItem Слоты
| Имя       | Описание                                    | Scope свойства          |
|-----------|---------------------------------------------|-------------------------|
| `default` | Настроить содержимое заголовка по умолчанию | `{ isActive: boolean }` |
| `header`  | Настроить содержимое шапки                  | `{ isActive: boolean }` |
| `icon`    | Настроить содержимое иконки                 | `{ isActive: boolean }` |

### Типы
```typescript
type IVAccordionValue = string | number;
type IVAccordionModelValue = IVAccordionValue | Array<IVAccordionValue> | undefined;

type IVAccordionProps = {
  modelValue: IVAccordionModelValue;
} & Partial<IThemeProp> & Partial<ISizeProp>

interface IVAccordionItemProps {
  value: IVAccordionValue;
  title?: string;
}

interface IVAccordionEmits {
  (event: 'change', payload: Maybe<IVAccordionValue>): void;
}

interface IVAccordionContext {
  props: IVAccordionProps;
  modelValue: Ref<IVAccordionModelValue>;
  onChange: (value: IVAccordionValue) => void;
}

interface IVAccordionItemSlots {
  default?: () => void
  icon?: (props: {
    isActive: boolean
  }) => never
  header?: (props: {
    isActive: boolean
  }) => never
}
```
