# VLabel

Компонент `VLabel` представляет собой элемент пользовательского интерфейса, который отображает метку или ярлык. 

Он может использоваться для обозначения различных элементов в интерфейсе, таких как заголовки, категории или статусы. 

Компонент поддерживает различные темы и размеры, а также позволяет легко настраивать внешний вид.

## Базовое использование
```vue
<template>
  <v-label
    theme="primary"
    size="small"
  >
    Пример метки
  </v-label>
</template>
```

## Группировка меток
```vue
<template>
  <v-label-group direction="horizontal">
    <v-label>
      Новинка
    </v-label>

    <v-label>
      Скидка
    </v-label>
  </v-label-group>
</template>
```

## API

### VLabel Свойства
| Имя          | Описание               | Тип       | Значения                                                                   | Значение по умолчанию     | Обязательно |  
|--------------|------------------------|-----------|----------------------------------------------------------------------------|---------------------------|-------------|
| `size`       | Размер                 | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-xs`    | Размер для экрана xs   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-sm`    | Размер для экрана sm   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-md`    | Размер для экрана md   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-lg`    | Размер для экрана lg   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-xl`    | Размер для экрана xl   | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `size-xxl`   | Размер для экрана xxl  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`               | `false`     |
| `theme`      | Тема                   | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`               | `false`     |

### VLabelGroup Свойства
| Имя         | Описание           | Тип          | Значения                 | Значение по умолчанию | Обязательно | 
|-------------|--------------------|--------------|--------------------------|-----------------------|-------------|
| `direction` | Направление группы | `IDirection` | `horizontal`, `vertical` | —                     | `true`      |

### Слоты
| Имя       | Описание                          |
|-----------|-----------------------------------|
| `default` | Настроить содержимое по умолчанию |

### Типы
```typescript
type IVLabelProps = Partial<ISizeProp> & Partial<IThemeProp>

interface IVLabelGroupProps extends IDirectionProp {}
```
