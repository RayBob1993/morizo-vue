# VDropdown

## Базовое использование
```vue
<template>
  <v-dropdown>
    <template #trigger="{ toggle }">
      <v-button @click="toggle">
        Меню
      </v-button>
    </template>
    
    <v-dropdown-menu>
      Выпадающее меню
    </v-dropdown-menu>
  </v-dropdown>
</template>
```

## API

### Свойства
| Имя          | Описание              | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно | 
|--------------|-----------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `size`       | Размер                | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`    | Размер для экрана xs  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`    | Размер для экрана sm  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`    | Размер для экрана md  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`    | Размер для экрана lg  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`    | Размер для экрана xl  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`   | Размер для экрана xxl | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`      | Тема                  | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### Методы
| Имя          | Описание                 | 
|--------------|--------------------------|
| `setVisible` | Задать открытие закрытие |

### События
| Имя                  | Описание                                                         | Тип              |
|----------------------|------------------------------------------------------------------|------------------|
| `close`              | Событие, вызываемое, когда меню закрывается                      | —                |
| `closed`             | Событие, вызываемое, когда меню закрыто                          | `HTMLDivElement` |
| `open`               | Событие, вызываемое, когда меню открывается                      | —                |
| `opened`             | Событие, вызываемое, когда меню открыто                          | `HTMLDivElement` |
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | `boolean`        |


### Слоты
| Имя       | Описание                                                                    | Scope свойства                                                                       |
|-----------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| `trigger` | Добавляет элемент внутри dropdown вызывающий действие при открытии\закрытии | `{ isVisible: boolean, toggle: () => void, setVisible: (payload: boolean) => void }` |

### Типы
```typescript
type IVDropdownProps = Partial<IThemeProp> & Partial<ISizeProp>;

interface IVDropdownContext {
  props: IVDropdownProps;
}

interface IVDropdownSlots {
  default?: () => any;
  trigger?: (props: {
    isVisible: boolean;
    toggle: () => void;
    setVisible: (payload: boolean) => void;
  }) => any;
}

interface IVDropdownEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close', ): void;
}

interface IVDropdownInstance {
  setVisible: (payload: boolean) => void;
  isVisible: boolean;
}

interface IVDropdownExpose {
  setVisible: (payload: boolean) => void;
  isVisible: Ref<boolean>;
}
```
