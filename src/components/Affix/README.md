# VAffix
Компонент `VAffix` предназначен для создания "прикрепленных" элементов интерфейса, которые остаются на экране при прокрутке страницы. Это может быть полезно для отображения меню, кнопок или других элементов, которые должны быть всегда видны пользователю.

## Базовое использование
По умолчанию аффикс закреплен относительно родительского элемента DOM.

Вы можете задать `offset-top` свойство или `offset-bottom` свойство для изменения смещения сверху или снизу, значение по умолчанию — 0.
```vue
<template>
  <div class="root">
    <v-affix
      :offset-top="100"
      :offset-bottom="100"
    >
      <v-button>
        Кнопка
      </v-button>
    </v-affix>
  </div>
</template>

<style lang="scss">
  .root {
    height: 200vh;
  }
</style>
```

## Блокировка
Вы можете установить `disabled` свойство, чтобы отменить фиксацию блока в определённый момент.

```vue
<template>
  <div class="root">
    <v-affix
      :offset-top="100"
      :offset-bottom="100"
      :disabled="isDisabled"
    >
      <v-button>
        Кнопка
      </v-button>
    </v-affix>
  </div>
</template>

<script lang="ts" setup>
  const isDisabled = ref<boolean>(false);
  
  onMounted(() => {
    setTimeout(() => {
      isDisabled.value = true;
    }, 2000);
  });
</script>

<style lang="scss">
  .root {
    height: 200vh;
  }
</style>
```

## Контейнер
Вы можете установить `container` свойство, чтобы указать относительно какого элемента DOM должен фиксироваться элемент

```vue
<template>
  <div class="root">
    <div class="parent">
      <v-affix
        container=".root"
        :offset-top="100"
        :offset-bottom="100"
      >
        <v-button>
          Кнопка
        </v-button>
      </v-affix>
    </div>
  </div>
</template>

<style lang="scss">
  .root {
    height: 300vh;
  }
  
  .parent {
    height: 200vh;
  }
</style>
```

## API

### Свойства

| Имя            | Описание                                            | Тип       | Значения | Значение по умолчанию          | Обязательно |
|----------------|-----------------------------------------------------|-----------|----------|--------------------------------|-------------|
| `offsetTop`    | Смещение сверху                                     | `number`  | —        | `0`                            | `false`     |
| `offsetBottom` | Смещение снизу                                      | `number`  | —        | `0`                            | `false`     |
| `disabled`     | Блокировка фиксации                                 | `boolean` | —        | `false`                        | `false`     |
| `container`    | Селектор, относительно которого нужно фиксироваться | `string`  | —        | Ближайший родительский элемент | `false`     |

### Типы
```typescript
interface IVAffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  disabled?: boolean;
  container?: string;
}
```
