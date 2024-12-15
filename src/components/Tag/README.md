# VLayout

Компонент `VTag` представляет собой элемент пользовательского интерфейса, который отображает метку или тег с возможностью удаления. 

Он может использоваться для отображения информации, такой как категории, статусы или другие текстовые данные. 

Компонент поддерживает различные темы и размеры, а также предоставляет возможность удаления тега с помощью кнопки.

## Базовое использование
```vue
<template>
  <v-tag
    theme="primary"
    size="small"
  >
    Пример тега
  </v-tag>
</template>
```

## Удаление
```vue
<template>
  <v-tag 
    v-for="tag in tags"
    :key="tag"
    @delete="onDelete(tag)"
  >
    {{ tag }}
  </v-tag>
</template>

<script lang="ts" setup>
  const tags = ref<Array<string>>(['1', '2', '3']);
  
  function onDelete (id: string) {
    tags.value.filter(tagId => tagId !== id);
  }
</script>
```

## Группировка тегов
```vue
<template>
  <v-tag-group direction="horizontal">
    <v-tag>
      #Фильмы
    </v-tag>

    <v-tag>
      #Музыка
    </v-tag>

    <v-tag>
      #Книги
    </v-tag>
  </v-tag-group>
</template>
```

## API

### VTag Свойства
| Имя           | Описание              | Тип       | Значения                                                                   | Значение по умолчанию | Обязательно |  
|---------------|-----------------------|-----------|----------------------------------------------------------------------------|-----------------------|-------------|
| `size`        | Размер                | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xs`     | Размер для экрана xs  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-sm`     | Размер для экрана sm  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-md`     | Размер для экрана md  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-lg`     | Размер для экрана lg  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xl`     | Размер для экрана xl  | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `size-xxl`    | Размер для экрана xxl | `ISizes`  | `mini`, `small`, `medium`, `large`, `big`, `huge`, `massive`               | `undefined`           | `false`     |
| `theme`       | Тема                  | `IThemes` | `base`, `primary`, `tertiary`, `secondary`, `danger`, `success`, `warning` | `undefined`           | `false`     |

### VTagGroup Свойства
| Имя         | Описание           | Тип          | Значения                 | Значение по умолчанию | Обязательно | 
|-------------|--------------------|--------------|--------------------------|-----------------------|-------------|
| `direction` | Направление группы | `IDirection` | `horizontal`, `vertical` | —                     | `true`      |

### События
| Имя      | Описание                                       | Тип |
|----------|------------------------------------------------|-----|
| `delete` | Событие, вызываемое, когда кликаем на удаление | -   |

### Слоты
| Имя       | Описание                          |
|-----------|-----------------------------------|
| `default` | Настроить содержимое по умолчанию |

### Типы
```typescript
type IVTagProps = Partial<IThemeProp> & Partial<ISizeProp>;

interface IVTagEmits {
  (event: 'delete'): void;
}

interface IVTagsGroupProps extends IDirectionProp {}
```
