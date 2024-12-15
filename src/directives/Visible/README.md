# vVisible

## Базовое использование

Директива `vVisible` позволяет выполнять действия в зависимости от видимости элемента в области просмотра. Вы можете использовать её для добавления классов или вызова функций, когда элемент становится видимым.

```vue
<template>
  <div v-visible="'visible-class'">
    Этот элемент будет получать класс "visible-class", когда станет видимым.
  </div>

  <div v-visible="myFunction">
    Этот элемент вызовет функцию myFunction, когда станет видимым.
  </div>
</template>

<script lang="ts" setup>
const myFunction = (element: HTMLElement) => {
  console.log('Элемент видим:', element);
};
</script>
```

## Модификаторы

Директива поддерживает два модификатора:

- **hide**: скрывает элемент, устанавливая `opacity` в `0`, для комбинации с анимацией использующей opacity
- **once**: отслеживает элемент только один раз; после того, как он становится видимым, наблюдение прекращается.

### Пример использования с модификаторами

```vue
<template>
  <div v-visible.hide="'visible-class'">
    Этот элемент будет скрыт, когда не видим.
  </div>

  <div v-visible.once="'visible-class'">
    Этот элемент получит класс "visible-class" один раз, когда станет видимым.
  </div>
</template>
```
### Пример использования с конфигом IntersectionObserver

```vue
<template>
  <div 
    v-visible="{
      observerConfig: {
        threshold: 0.6
      }, 
      bindingValue: 'animate-class'
    }
  ">
    Элементу будет присвоен класс, как только он покажется во вьюпорте на 60%
  </div>

  <div 
    v-visible.once="{
      observerConfig: {
        threshold: 0.1
      }, 
      bindingValue: (el: HTMLElement)=>{console.log(el)}
    }
  ">
    Коллбек отработает единажды, когда элемент появится во вьюпорте на 10%
  </div>
</template>
```

### Пример использования с конфигом для анимации

```vue
<template>
  <div 
    v-visible="{
      animationConfig: {
        delay: '.2s'
      }, 
      bindingValue: 'animate-class'
    }
  ">
    Элементу будет присвоен класс, как только он покажется во вьюпорте и установит задержку перед выполнением анимации
  </div>
</template>
```

### Модификаторы

| Имя   | Описание                                                  |
|-------|-----------------------------------------------------------|
| `hide`| Устанавливает `opacity` в `0`                             |
| `once`| Прекращает отслеживание элемента после первого появления. |

## Типы

```typescript
interface HTMLElementWithObserver extends HTMLElement {
  _observer?: IntersectionObserver;
}

interface IObserverConfig {
  rootMargin?: IntersectionObserver['rootMargin'];
  threshold?: number;
  root?: IntersectionObserver['root'];
}

interface IAnimationConfig {
  delay?: CSSStyleDeclaration['animationDelay'];
}

interface IDirectiveBindWithConfig {
  observerConfig?: IObserverConfig;
  animationConfig?: IAnimationConfig;
  bindingValue: string | Function;
}

type TDirectiveModifiers = 'hide' | 'once';

type TDirectiveBindValue = string | Function | IDirectiveBindWithConfig;
```

