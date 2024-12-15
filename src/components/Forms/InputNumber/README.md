# VInputNumber

## Базовое использование
```vue
<template>
  <v-input-number v-model="model"/>
</template>

<script lang="ts" setup>
  const model = ref(0);
</script>
```

## API

### Свойства
| Имя                     | Описание               | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно | 
|-------------------------|------------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных          | `number`  | —                                                                          | —                     | `false`     |
| `size`                  | Размер                 | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `step`                  | Шаг                    | `number`  | —                                                                          | `1`                   | `false`     |
| `min`                   | Минимальное значение   | `number`  | —                                                                          | `-Infinity`           | `false`     |
| `max`                   | Максимальное значение  | `number`  | —                                                                          | `Infinity`            | `false`     |
| `theme`                 | Тема                   | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `disabled`              | Блокировка поля        | `boolean` | —                                                                          | `false`               | `false`     |

### События
| Имя                  | Описание                                                         | Тип |
|----------------------|------------------------------------------------------------------|-----|
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | —   |

### Типы
```typescript
type IVInputNumberModelValue = number;

type IVInputNumberProps = {
  modelValue?: IVInputNumberModelValue;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>
```
