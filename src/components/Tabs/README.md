# VTabs

Компонент `VTabs` представляет собой интерфейс вкладок, который позволяет пользователям переключаться между различными панелями содержимого. 

Он поддерживает горизонтальное и вертикальное расположение вкладок, а также позволяет управлять состоянием активной вкладки. 

Компонент организует навигацию с помощью подкомпонента `VTabsNav`.

## Базовое использование
```vue
<template>
  <v-tabs v-model="activeTab">
    <v-tab
      title="Таб 1"
      value="tab-1"
    >
      Вкладка 1
    </v-tab>
    
    <v-tab
      title="Таб 2"
      value="tab-2"
      v-slot="{ isVisible }"
    >
      {{ isVisible ? 'Активна' : 'Неактивна' }}
    </v-tab>
    
    <v-tab
      title="Таб 3"
      value="tab-3"
    >
      Вкладка 3
    </v-tab>
  </v-tabs>
</template>

<script lang="ts" setup>
  import type { IVTabsModelValue } from '#ui-types';
  
  const activeTab = ref<IVTabsModelValue>('tab-1');
</script>
```

## Кастомный заголовок вкладки
```vue
<template>
  <v-tabs v-model="activeTab">
    <v-tab value="tab-1">
      <template #title>
        <b>Кастомный шаблон заголовка вкладки</b>
      </template>
    </v-tab>
    
    <v-tab value="tab-2">
      <template #title>
        <b>Кастомный шаблон заголовка вкладки</b>
      </template>
    </v-tab>
  </v-tabs>
</template>

<script lang="ts" setup>
  import type { IVTabsModelValue } from '#ui-types';
  
  const activeTab = ref<IVTabsModelValue>('tab-1');
</script>
```

## Направление отображения
```vue
<template>
  <v-tabs 
    v-model="activeTab"
    direction="vertical"
  >
    <v-tab value="tab-1">
      Вкладка 1
    </v-tab>
    
    <v-tab value="tab-2">
      Вкладка 2
    </v-tab>
  </v-tabs>
</template>

<script lang="ts" setup>
  import type { IVTabsModelValue } from '#ui-types';
  
  const activeTab = ref<IVTabsModelValue>('tab-1');
</script>
```

## API

### VTabs Свойства
| Имя                     | Описание                                        | Тип          | Значения                                                                   | Значение по умолчанию | Обязательно |  
|-------------------------|-------------------------------------------------|--------------|----------------------------------------------------------------------------|-----------------------|-------------|
| `model-value / v-model` | Модель данных                                   | `IVTabValue` | —                                                                          | `undefined`           | `true`      |
| `direction`             | Указывает направление размещения                | `IDirection` | `horizontal`, `vertical`                                                   | `horizontal`          | `false`     |
| `size`                  | Размер                                          | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`               | Размер для экрана xs                            | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`               | Размер для экрана sm                            | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`               | Размер для экрана md                            | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`               | Размер для экрана lg                            | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`               | Размер для экрана xl                            | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`              | Размер для экрана xxl                           | `ISizes`     | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`                 | Тема                                            | `IThemes`    | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |
| `scrollable`            | Добавляет возможность скролить меню с вкладками | `boolean`    | —                                                                          | `true`                | `false`     |

### VTabs Слоты
| Имя        | Описание                          | Подкомпоненты |
|------------|-----------------------------------|---------------|
| `default`  | Настроить содержимое по умолчанию | `<v-tab>`     |

### VTabs События
| Имя                  | Описание                                                         | Тип                |
|----------------------|------------------------------------------------------------------|--------------------|
| `change`             | Событие, вызываемое, когда переключаются вкладки                 | `IVTabsModelValue` |
| `update:model-value` | Событие, вызываемое, когда компоненту необходимо изменить модель | `IVTabsModelValue` |

### VTab Свойства
| Имя     | Описание          | Тип          | Значение по умолчанию | Обязательно | 
|---------|-------------------|--------------|-----------------------|-------------|
| `title` | Заголовок вкладки | `string`     | `undefined`           | `true`      |
| `value` | Значение          | `IVTabValue` | `undefined`           | `true`      |

### VTab Слоты
| Имя       | Описание                               | Scope свойства           |
|-----------|----------------------------------------|--------------------------|
| `default` | Настроить содержимое по умолчанию      | `{ isVisible: boolean }` |

### Типы
```typescript
type IVTabValue = number | string;
type IVTabsModelValue = Maybe<IVTabValue>;

type IVTabsProps = {
  modelValue: IVTabsModelValue;
  scrollable?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp> & Partial<IDirectionProp>;

interface IVTabProps {
  title?: string;
  value: IVTabValue;
}

interface IVTabsEmits {
  (event: 'change', payload: IVTabsModelValue): void;
}

interface IVTabSlots {
  default?: (props: {
    isVisible: boolean;
  }) => any;
  title?: () => any;
}

interface IVTabContext {
  uid: string;
  props: IVTabProps;
  slots: IVTabSlots;
}

interface IVTabsContext {
  props: IVTabsProps;
  modelValue: ModelRef<IVTabsModelValue>;
  tabs: Ref<Array<IVTabContext>>;
  onChange: (value: IVTabValue) => void;
  registerTab: (tab: IVTabContext) => void;
  unregisterTab: (tab: IVTabContext) => void;
}
```
