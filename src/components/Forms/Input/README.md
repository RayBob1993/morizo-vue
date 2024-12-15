# VInput

## Базовое использование
```vue
<template>
  <v-input 
    v-model="name"
    title="Имя"
    size="medium"
    theme="primary"
  />

  <v-input 
    v-model="email"
    title="E-mail"
    size="medium"
    theme="primary"
    native-type="email"
  />

  <v-input 
    v-model="message"
    title="Сообщение"
    size="medium"
    theme="primary"
    type="textarea"
  />
</template>

<script lang="ts" setup>  
  const name = ref<string>();
  const email = ref<string>();
  const message = ref<string>();
</script>
```

## Блокировка поля
```vue
<template>
  <v-input 
    v-model="name"
    title="Имя"
    size="medium"
    theme="primary"
    disabled
  />
</template>

<script lang="ts" setup>  
  const name = ref<string>();
</script>
```

## Слоты
```vue
<template>
  <v-input
    v-model="name"
    title="Имя"
    size="medium"
    theme="primary"
  >
    <template #before>
      Слот слева
    </template>

    <template #after>
      Слот справа
    </template>
  </v-input>
</template>

<script lang="ts" setup>  
  const name = ref<string>();
</script>
```

## API

### Свойства
| Имя                     | Описание               | Тип         | Значения                                                                   | Значение по умолчанию | Обязательно |  
|-------------------------|------------------------|-------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных          | `string`    | —                                                                          | `undefined`           | `false`     |
| `disabled`              | Блокировка поля        | `boolean`   | —                                                                          | `false`               | `false`     |
| `size`                  | Размер                 | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs   | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm   | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md   | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg   | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl   | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl  | `ISizes`    | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                   | `IThemes`   | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `title`                 | Заголовок              | `string`    | —                                                                          | `undefined`           | `false`     |
| `native-type`           | Нативный тип поля      | `string`    | `text`, `email`, `number`, `tel`, `url`, `search` `password`               | `text`                | `false`     |
| `type`                  | Тип поля               | `string`    | `input`, `textarea`                                                        | `input`               | `false`     |

### Слоты
| Имя       | Описание                                                    |
|-----------|-------------------------------------------------------------|
| `before`  | Добавляет элемент внутри поля ввода и после его содержимого |
| `after`   | Добавляет элемент внутри поля ввода и перед его содержимым  |

### События
Компонент принимает все имеющиеся у тега `input` события

| Имя                  | Описание                                                         | Тип |
|----------------------|------------------------------------------------------------------|-----|
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | —   |

### Типы
```typescript
type IVInputNative = HTMLInputElement | HTMLTextAreaElement;

type IVInputModelValue = Maybe<string>;

type IVInputBaseProps = {
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

type IVInputProps = {
  modelValue: IVInputModelValue;
  type?: IInputTypes;
  nativeType?: IInputNativeTypes;
  showRequired?: boolean;
  title?: string;
  inputMode?: IInputMode;
} & IVInputBaseProps

interface IVInputInstance {
  input: Maybe<IVInputNative>;
  focus: () => void;
}

interface IVInputEmits {
  (event: 'focusin', payload: Event): void;
  (event: 'focusout', payload: Event): void;
}

interface IVInputSlots {
  default?: () => any;
  before?: () => any;
  after?: () => any;
}

interface IVInputExpose {
  input: ShallowRef<Maybe<IVInputNative>>;
  focus: () => void;
}
```
