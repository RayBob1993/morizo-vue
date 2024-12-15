# VForm

Форма состоит из `v-input`, `v-radio`, `v-checkbox` т.д. С помощью формы вы можете собирать, проверять и отправлять данные.

## Базовое использование
Компонент формы позволяет валидировать данные формы, помогая находить и исправлять ошибки.

Просто добавьте свойство `rules` и директиву `v-model` для `v-form` компонента, опишите правила проверки и установите свойство `prop` для `v-form-item` в качестве определенного ключа указанного в объекте `rules`, который необходимо проверить. 
Дополнительную информацию см. в [async-validator](https://github.com/yiminghe/async-validator).

```vue
<template>
  <v-form
    ref="form"
    v-model="model"
    :rules="rules"
    @submit.prevent="onSubmit"
  >
    <v-form-item 
      title="Имя" 
      prop="name"
    >
      <v-input v-model="model.name"/>
    </v-form-item>

    <v-form-item 
      title="Email" 
      prop="email"
    >
      <v-input
        v-model="model.email"
        native-type="email"
      />
    </v-form-item>

    <v-form-item 
      title="Выберите пол" 
      prop="gender"
    >
      <v-radio-group direction="vertical">
        <v-radio
          v-model="model.gender"
          value="male"
        >
          Мужчина
        </v-radio>

        <v-radio
          v-model="model.gender"
          value="female"
        >
          Женщина
        </v-radio>
      </v-radio-group>
    </v-form-item>

    <v-form-item 
      title="Увлечения" 
      prop="hobbies"
    >
      <v-checkbox-group direction="vertical">
        <v-checkbox
          v-model="model.hobbies"
          value="js"
        >
          JS
        </v-checkbox>

        <v-checkbox 
          v-model="model.hobbies"
          value="go"
        >
          GO
        </v-checkbox>

        <v-checkbox 
          v-model="model.hobbies"
          value="php"
        >
          GO
        </v-checkbox>

        <v-checkbox 
          v-model="model.hobbies"
          value="node.js"
        >
          GO
        </v-checkbox>
      </v-checkbox-group>
    </v-form-item>

    <v-form-item 
      title="Сообщение" 
      prop="message"
    >
      <v-input
        v-model="model.message"
        type="textarea"
      />
    </v-form-item>

    <v-form-item prop="policy">
      <v-checkbox
        v-model="model.policy"
        label="Согласие на обработку данных"
      />
    </v-form-item>

    <v-button type="submit">
      Отправить
    </v-button>
  </v-form>
</template>

<script lang="ts" setup>
  import type { IVFormInstance, IVFormRules } from '#ui-types';
  
  interface IFormModel {
    name: string;
    gender: string;
    email: string;
    message: string;
    hobbies: Array<string>;
    policy: boolean
  }
  
  const form = useTemplateRef<IVFormInstance>('form');
  
  const model = ref<IFormModel>({
    name: '',
    gender: '',
    email: '',
    message: '',
    hobbies: [],
    policy: false
  });
  
  const rules = ref<IVFormRules<IFormModel>>({
    name: [
      { required: true, message: 'Пожалуйста, укажите Ваше имя' },
      { min: 3, max: 5, message: 'Длина должна быть не меньше 3х и не больше 5 символов' }
    ],
    email: [
      { required: true, message: 'Пожалуйста, укажите Ваш email' },
    ],
    message: [
      { required: true, message: 'Укажите ваше сообщение' }
    ]
  });

  async function onSubmit () {
    await form.value?.validate();
    
    console.log('Валидация прошла успешно');
  }
</script>
```

## Готовые правила валидации
* **boolean** - правило для `boolean` типа данных
* **email** - правило для `email` полей
* **max-length** - правило ограничения ввода на 100 символов
* **phone** - правило для валидации номера телефона
* **required** - правило для обязательности заполнения
* **ruLetters** - правило для ввода только кирилицы
* **search** - правило для поля поиска
* **password** - правило для пароля
* **passwordConfirm** - правило для подтверждения пароля(работает в паре с правилом password)

```vue
<script lang="ts" setup>
  import type { IVFormRules } from '#ui-types';
  
  const { 
    required, 
    email, 
    password, 
    passwordConfirm, 
    boolean, 
    phone, 
    maxLength, 
    ruLetters,
    search
  } = useValidationRules();

  const model = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
    policy: false,
    password: '',
    passwordConfirm: ''
  });

  const rules = computed<IVFormRules>(() => ({
    name: [
      ...required.value,
      ...maxLength.value,
      ...ruLetters.value
    ],
    email: [
      ...required.value,
      ...email.value
    ],
    phone: [
      ...required.value,
      ...phone.value
    ],
    message: [
      ...required.value
    ],
    policy: [
      ...boolean.value
    ],
    password: [
      ...required.value,
      ...password.value
    ],
    passwordConfirm: [
      ...required.value,
      ...password.value,
      ...passwordConfirm(model.value.password)
    ],
  }));
</script>
```

## Scoped слоты
Свойство `isValid` компонента `v-form` позволяет получить булево значение, валидно ли форма в данную секунду или нет.
Можно использовать внутри шаблона формы, для блокировки кнопки отправки, пока форма не заполнена валидными данными.

Так же, у компонента `v-form-item` есть свойство `validationStatus`. Это объект, имеющий 3 свойства:
* `isError` - если валидация поля прошла с ошибкой
* `isValidating` если поле находится в процессе выполнения валидации, например, ожидание проверки валидации на сервера и ожидает ответа
* `isSuccess` - поле полностью валидно

```vue
<template>
  <v-form
    ref="form"
    v-slot="{ isValid }"
    v-model="model"
    :rules="rules"
    @submit.prevent="onSubmit"
  >
    <v-form-item 
      title="Имя" 
      prop="name"
      v-slot="{ validationStatus }"
    >
      Ошибка валидации: {{ validationStatus.isError }}<br>
      Валидация в процессе: {{ validationStatus.isValidating }}<br>
      Валидация успешна: {{ validationStatus.isSuccess }}
      
      <v-input v-model="model.name"/>
    </v-form-item>

    <v-button 
      type="submit"
      :disabled="!isValid"
    >
      Отправить
    </v-button>
  </v-form>
</template>

<script lang="ts" setup>
  import type { IVFormInstance, IVFormRules } from '#ui-types';
  
  interface IFormModel {
    name: string;
  }
  
  const form = useTemplateRef<IVFormInstance>('form');
  
  const model = ref<IFormModel>({
    name: ''
  });
  
  const rules = ref<IVFormRules<IFormModel>>({
    name: [
      { required: true, message: 'Пожалуйста, укажите Ваше имя' },
      { min: 3, max: 5, message: 'Длина должна быть не меньше 3х и не больше 5 символов' }
    ]
  });

  async function onSubmit () {
    await form.value?.validate();
    
    console.log('Валидация прошла успешно');
  }
</script>
```

## Задать свой список с ошибками
Метод `setErrors` позволяет установить свои ошибки внутри ошибки поля. Например, когда бекенд ответил с ошибкой на значение поля и мы хотим пробросить эту ошибку внутрь поля.

```vue
<template>
  <v-form
    ref="form"
    v-slot="{ isValid }"
    v-model="model"
    :rules="rules"
    @submit.prevent="onSubmit"
  >
    <v-form-item 
      title="Имя" 
      prop="name"
    >
      <v-input v-model="model.name"/>
    </v-form-item>

    <v-button 
      type="submit"
      :disabled="!isValid"
    >
      Отправить
    </v-button>
  </v-form>
</template>

<script lang="ts" setup>
  import type { IVFormInstance, IVFormRules } from '#ui-types';
  
  interface IFormModel {
    name: string;
  }
  
  const form = useTemplateRef<IVFormInstance>('form');
  
  const model = ref<IFormModel>({
    name: ''
  });
  
  const rules = ref<IVFormRules<IFormModel>>({
    name: [
      { required: true, message: 'Пожалуйста, укажите Ваше имя' },
      { min: 3, max: 5, message: 'Длина должна быть не меньше 3х и не больше 5 символов' }
    ]
  });

  async function onSubmit () {
    await form.value?.validate();
    
    try {
      await fetch('...');
    } catch (error) {
      // Метод установит свой текст ошибки и установит поле в статус ошибки
      form.value?.setErrors({
        name: [error.data?.message]
      });
    }
  }
</script>
```

## API

### VForm cвойства
| Имя                     | Описание                                     | Тип                     | Значения | Значение по умолчанию | Обязательно | 
|-------------------------|----------------------------------------------|-------------------------|----------|-----------------------|-------------|
| `v-model`               | Модель данных                                | `IVFormModel`           | —        | `undefined`           | `true`      |
| `rules`                 | Правила валидации формы                      | `IVFormRules`           | —        | `undefined`           | `false`     |
| `disabled`              | Блокировка формы и всех полей, кнопок внутри | `boolean`               | —        | `false`               | `false`     |
| `scrollToError`         | Скролл к полю с ошибкой валидации            | `boolean`               | —        | `false`               | `false`     |
| `scrollIntoViewOptions` | Настройки скролла к полю с ошибкой валидации | `ScrollIntoViewOptions` | —        | `{ block: 'center' }` | `false`     |

### VForm слоты
| Имя       | Описание                          | Scope свойства         |
|-----------|-----------------------------------|------------------------|
| `default` | Настроить содержимое по умолчанию | `{ isValid: boolean }` |

### VForm методы
| Имя             | Описание                                                                                                                                                                                     | Параметры                                          | Возвращаемое значение | 
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-----------------------|
| `validate`      | Запустить валидирование формыю. Если передан флаг `silent` равный `true`, то валидация не вызовет вывод ошибок                                                                               | `silent: boolean`                                  | `Promise<boolean>`    |
| `clearValidate` | Очистить валидацию формы                                                                                                                                                                     | —                                                  | —                     |
| `reset`         | Сбросить значения модели формы к изначальным                                                                                                                                                 | —                                                  | —                     |
| `setErrors`     | Установить ошибки для формы. Принимает объект в формате `Record<keyof IVFormRules, Array<string>>`, где ключи — свойство `prop` `VFormItem`, а значения — массивы строк с описаниями ошибок. | `errors: Record<keyof IVFormRules, Array<string>>` | —                     |                                                                                           | —                 | —                     |

### VFormItem свойства
| Имя     | Описание                                            | Тип      | Значения | Значение по умолчанию | Обязательно | 
|---------|-----------------------------------------------------|----------|----------|-----------------------|-------------|
| `title` | Заголовок                                           | `string` | —        | `undefined`           | `false`     |
| `prop`  | Ключ с именем поля, которое необходимо валидировать | `string` | —        | `undefined`           | `false`     |

### VFormItem слоты
| Имя       | Описание                          | Scope свойства                                               |
|-----------|-----------------------------------|--------------------------------------------------------------|
| `default` | Настроить содержимое по умолчанию | `{ validationStatus: { isError, isValidating, isSuccess } }` |

### Типы
```typescript
type IVFormModelValues = any;

type IVFormModel = Record<string, IVFormModelValues>;

type IVFormRules<T = unknown> = Partial<Record<T extends object ? keyof T : string, Rule>>;

type IVFormValidationResult = Promise<boolean>;

type IVFormProps = {
  modelValue: IVFormModel;
  rules?: IVFormRules;
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: ScrollIntoViewOptions;
} & Partial<ISizeProp> & Partial<IThemeProp>

interface IVFormContext {
  props: IVFormProps;
  modelValue: ModelRef<IVFormModel>;
  registerFormItem: (newFormItem: IVFormItemInstance) => void;
  unregisterFormItem: (oldFormItem: IVFormItemInstance) => void;
}

interface IVFormInstance {
  validate: (silent?: boolean) => IVFormValidationResult;
  clearValidate: () => void;
  reset: () => void;
  setErrors: (errors: Record<keyof IVFormRules, Array<string>>) => void;
}

interface IVFormExpose extends IVFormInstance {}

interface IAsyncValidationError {
  errors: Array<ValidateError>;
  fields: Record<string, Array<ValidateError>>;
}

interface IVFormItemField {
  reset: () => void;
}

interface IVFormItemProps {
  disabled?: boolean;
  prop?: keyof IVFormRules;
  title?: string;
}

interface IVFormItemSlots {
  default?: (props: {
    validationStatus: IVFormItemValidationStatus;
  }) => any;
}

interface IVFormItemValidationStatus {
  isError: boolean;
  isValidating: boolean;
  isSuccess: boolean;
}

interface IVFormItemErrorsProps {
  errors: Array<ValidateError>;
}

interface IVFormItemContext {
  props: IVFormItemProps;
  validationStatus: Ref<IVFormItemValidationStatus>;
  registerField: (field: IVFormItemField) => void;
  unregisterField: () => void;
  isRequired: ComputedRef<boolean>;
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}

interface IVFormItemInstance {
  uid: string;
  el: TemplateRef<HTMLDivElement>;
  isValidatable: ComputedRef<boolean>;
  props: IVFormItemProps;
  setErrors: (errors: Array<string>) => void;
  validationStatus: Ref<IVFormItemValidationStatus>;
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}

interface IVFormItemExpose {
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}
```
