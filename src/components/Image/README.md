# VImage

## Бозовое использование
```vue
<template>
  <v-image src="https://loremflickr.com/1000/1000"/>
</template>
```

## Отключить отображение заглушки
```vue
<template>
  <v-image 
    :has-placeholder="false" 
    src="https://loremflickr.com/1000/1000"
  />
</template>
```

## Формат заполнения
```vue
<template>
  <v-image 
    fit="cover" 
    src="https://loremflickr.com/1000/1000"
  />

  <v-image
    fit="contain"
    src="https://loremflickr.com/1000/1000"
  />

  <v-image
    fit="fill"
    src="https://loremflickr.com/1000/1000"
  />
</template>
```

## Загругление
```vue
<template>
  <v-image 
    rounded 
    src="https://loremflickr.com/1000/1000"
  />
</template>
```

## Центрирование
```vue
<template>
  <v-image 
    class="image"
    center 
    src="https://loremflickr.com/200/200"
  />
</template>

<style lang="scss">
  .image {
    width: 400px;
    height: 400px;
  }
</style>
```

## API

### Свойства
| Имя               | Описание                                                                         | Тип                                      | Значения                     | Значение по умолчанию | Обязательно |  
|-------------------|----------------------------------------------------------------------------------|------------------------------------------|------------------------------|-----------------------|-------------|
| `fit`             | Заполнение, по аналогии с `object-fit` в css                                     | `IVImageFit`                             | `cover`, `contain`, `fill`   | `cover`               | `false`     |
| `src`             | Путь к изображению                                                               | `string`                                 | —                            | —                     | `true`      |
| `has-placeholder` | Заглушка при отсутствии или загрузке изображения                                 | `boolean`                                | —                            | `true`                | `false`     |
| `rounded`         | Закругление краёв                                                                | `boolean`                                | —                            | `false`               | `false`     |
| `center`          | Центрирование изображения                                                        | `boolean`                                | —                            | `false`               | `false`     |
| `threshold`       | Число или массив чисел, указывающий допустимый процент пересечения target и root | `IntersectionObserverInit['threshold']`  | —                            | `0.1`                 | `false`     |

### События
| Имя     | Описание                                                    | Тип         |
|---------|-------------------------------------------------------------|-------------|
| `load`  | Событие, вызываемое, когда изображение загрузилось          | `Event`     |
| `error` | Событие, вызываемое, когда изображение не удалось загрузить | `Event`     |

### Типы
```typescript
type IVImageFit = keyof typeof FitList;

interface IVImageProps {
  fit?: IVImageFit;
  src?: string | undefined | null;
  hasPlaceholder?: boolean;
  circle?: boolean;
  rounded?: boolean;
  center?: boolean;
}
```
