import type { RuleItem } from 'async-validator';
import { useConfigProviderContext } from './';
import { emailPattern, passwordPattern, phonePattern, ruLettersPattern } from '../utils';
import { computed } from 'vue';

export function useValidationRules () {
  const Provider = useConfigProviderContext();

  /**
   * @description Готовое правило обязательности заполнения для async-validator
   */
  const required = computed<Array<RuleItem>>(() => [
    {
      required: true,
      message: Provider?.locale?.el.form.validation.rules.required
    }
  ]);

  /**
   * @description Готовое правило валидации email адреса для async-validator
   */
  const email = computed<Array<RuleItem>>(() => [
    {
      type: 'email',
      pattern: emailPattern,
      message: Provider?.locale?.el.form.validation.rules.email
    }
  ]);

  /**
   * @description Готовое правило валидации телефона для async-validator
   */
  const phone = computed<Array<RuleItem>>(() => [
    {
      pattern: phonePattern,
      message: Provider?.locale?.el.form.validation.rules.phone
    }
  ]);

  /**
   * @description Готовое правило заполнения поля поиска для async-validator
   */
  const search = computed<Array<RuleItem>>(() => [
    {
      min: 3,
      message: Provider?.locale?.el.form.validation.rules.search
    }
  ]);

  /**
   * @description Готовое правило валидации длины для async-validator
   *
   */
  const maxLength = computed<Array<RuleItem>>(() => [
    {
      max: 100,
      message: Provider?.locale?.el.form.validation.rules.maxLength
    }
  ]);

  /**
   * @description Готовое правило валидации булева значения для async-validator
   *
   */
  const boolean = computed<Array<RuleItem>>(() => [
    {
      type: 'boolean',
      validator: (rule, value, next) => {
        if (value === false) {
          next(Provider?.locale?.el.form.validation.rules.boolean);
        } else {
          next();
        }
      }
    }
  ]);

  /**
   * @description Готовое правило валидации только кирилици для async-validator
   *
   */
  const ruLetters = computed<Array<RuleItem>>(() => [
    {
      pattern: ruLettersPattern,
      message: Provider?.locale?.el.form.validation.rules.ruLetters
    }
  ]);

  /**
   * @description Готовое правило валидации создания пароля для async-validator
   *
   */
  const password = computed<Array<RuleItem>>(() => [
    {
      min: 6,
      message: Provider?.locale?.el.form.validation.rules.password.length
    },
    {
      pattern: passwordPattern,
      message: Provider?.locale?.el.form.validation.rules.password.pattern
    }
  ]);

  /**
   * @description Готовое правило валидации создания подтверждения нового пароля для async-validator
   * @example
   *
   * ```ts
   * const { required, password, passwordConfirm } = useValidationRules();
   *
   * const model = ref({
   *   password: '',
   *   passwordRepeat: ''
   * });
   *
   * const rules = computed(() => ({
   *   password: [
   *     ...required.value,
   *     ...password.value
   *   ],
   *   passwordRepeat: [
   *     ...required.value,
   *     ...password.value,
   *     ...passwordConfirm(model.value.password)
   *   ]
   * }));
   *   ```
   */
  function passwordConfirm (passwordNew: string): Array<RuleItem> {
    return [
      {
        validator (rule, value, next) {
          if (passwordNew !== value) {
            next(new Error(Provider?.locale?.el.form.validation.rules.password.confirm));
          } else {
            next();
          }
        }
      }
    ];
  }

  return {
    required,
    email,
    phone,
    search,
    maxLength,
    boolean,
    ruLetters,
    password,
    passwordConfirm
  };
}
