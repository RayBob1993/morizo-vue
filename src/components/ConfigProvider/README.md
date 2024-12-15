# VConfigProvider

Компонент `VConfigProvider` предназначен для предоставления контекста конфигурации в вашем Vue-приложении. Он позволяет задавать локализацию и другие параметры, которые могут использоваться дочерними компонентами через механизм provide/inject.

> Компонент `VConfigProvider` должен быть обернут вокруг компонентов, которым требуется доступ к конфигурации.
> 
> Используйте `withDefaults` для задания значений по умолчанию для пропсов, чтобы обеспечить более предсказуемое поведение.

## Базовое использование
```vue
<template>
  <v-config-provider>
    <app/>
  </v-config-provider>
</template>
```

## Переключение локали
```vue
<template>
  <v-config-provider :locale="locale">
    <app/>
    
    <v-button @click="setLocale('ru_RU')">ru_RU</v-button>
    <v-button @click="setLocale('en_US')">en_US</v-button>
  </v-config-provider>
</template>

<script lang="ts" setup>
  import { ru, en } from '#ui';
  
  const locale = ref('ru_RU');
  
  const currentLocale = computed(() => {
    return locale.value === 'ru_RU'
      ? ru
      : en
  });
    
  function setLocale (newLocale: string) {
    locale.value = newLocale;
  }
</script>
```

## Создание новой локали
Создайте файл с переводами и поместите в папку locale

```typescript
import type { IVLocale } from '../../types';

const de: IVLocale = {
  name: 'de_DE',
  el: {
    form: {
      validation: {
        rules: {
          required: '',
          email: '',
          phone: '',
          search: '',
          maxLength: '',
          boolean: '',
          ruLetters: '',
          password: {
            length: '',
            pattern: '',
            confirm: ''
          }
        }
      }
    }
  }
};
```

После вы можете воспользовать новой локалью следующим образом, например:
```vue
<template>
  <v-config-provider :locale="locale">
    <app/>
    
    <v-button @click="setLocale('ru_RU')">ru_RU</v-button>
    <v-button @click="setLocale('en_US')">en_US</v-button>
    <v-button @click="setLocale('de_DE')">de_DE</v-button>
  </v-config-provider>
</template>

<script lang="ts" setup>
  import { ru, en, de } from '#ui';
  
  const locale = ref('ru_RU');
  
  const LOCALE_MAP = {
    ru_RU: ru,
    en_US: en,
    de_DE: de
  }
  
  const currentLocale = computed(() => LOCALE_MAP[locale.value]);
    
  function setLocale (newLocale: string) {
    locale.value = newLocale;
  }
</script>
```

## API

### Свойства

| Имя         | Описание                          | Тип        | Значения                                  | Значение по умолчанию | Обязательно |
|-------------|-----------------------------------|------------|-------------------------------------------|-----------------------|-------------|
| `locale`    | Объект с настройками локализации. | `IVLocale` | `{ name: string; el: IVLocaleTranslate }` | `ru`                  | `false`     |
| `direction` | Направление контента              | `string`   | `ltr` , `rtl`                             | `ltr`                 | `false`     |

### Типы
```typescript
type IVLocaleTranslate = {
  form: {
    validation: {
      rules: {
        required: string;
        email: string;
        phone: string;
        search: string;
        maxLength: string;
        boolean: string;
        ruLetters: string;
        password: {
          length: string;
          pattern: string;
          confirm: string;
        }
      }
    }
  }
}

interface IVLocale {
  name: string;
  el: IVLocaleTranslate;
}

interface IVConfigProviderProps {
  locale?: IVLocale;
  direction?: 'ltr' | 'rtl';
}

interface IVConfigProviderContext extends IVConfigProviderProps {}
```
