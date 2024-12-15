# VFancybox

Компонент `VFancybox` предназначен для интеграции библиотеки Fancybox в ваше Vue-приложение. Он позволяет легко управлять всплывающими окнами и галереями изображений.

## Базовое использование
```vue
<template>
  <v-fancybox 
    :options="{
      Carousel: {
        infinite: false
      }
    }"
  >
    <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
      <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
    </a>
    
    <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
      <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
    </a>
    
    <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
      <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
    </a>
    
    <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
      <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
    </a>
    
    <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
      <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
    </a>
  </v-fancybox>
</template>
```

## API

### Свойства
| Имя       | Описание                            | Тип            | Значения | Значение по умолчанию | Обязательно |
|-----------|-------------------------------------|----------------|----------|-----------------------|-------------|
| `options` | Объект с настройками для Fancybox.  | `OptionsType`  | —        | `undefined`           | `false`     |

### Типы
```typescript
interface IVFancyboxProps {
  options?: Partial<OptionsType>;
}
```
