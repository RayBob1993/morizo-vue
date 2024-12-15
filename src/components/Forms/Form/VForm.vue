<template>
  <form
    class="v-form"
    :class="{
      'v-form--disabled': disabled
    }"
  >
    <slot :is-valid="isValid"/>
  </form>
</template>

<script lang="ts" setup>
  import type { IVFormItemInstance } from '../FormItem/types';
  import type { IVFormModel, IVFormProps, IVFormSlots, IVFormExpose, IVFormValidationResult, IVFormRules } from './types';
  import type { Maybe } from '../../../types';
  import { VFormContextKey } from '../../../keys';
  import { useScrollTo } from '../../../composables';
  import { delay } from '../../../utils';
  import { ref, computed, watch, provide } from 'vue';

  const props = withDefaults(defineProps<IVFormProps>(), {
    scrollIntoViewOptions: () => ({
      block: 'center'
    })
  });

  defineSlots<IVFormSlots>();

  const modelValue = defineModel<IVFormModel>({
    required: true
  });

  const isValid = ref<boolean>(false);

  const formItems = ref<Array<IVFormItemInstance>>([]);
  const validatableFormItems = computed<Array<IVFormItemInstance>>(() => formItems.value.filter(formItem => formItem.isValidatable));

  async function validate (silent = false): IVFormValidationResult {
    return new Promise(async (resolve, reject) => {
      const validationPromises = await Promise.all(validatableFormItems.value.map(formItem => formItem.validate(silent)));

      const isValid = validationPromises.every(Boolean);

      if (silent && props.scrollToError) {
        scrollToErrorField();
      }

      return isValid
        ? resolve(true)
        : reject(false);
    });
  }

  function scrollToErrorField () {
    const invalidFormItem: Maybe<IVFormItemInstance> = formItems.value.find(formItem => formItem.isValidationStatusError);

    if (!invalidFormItem) {
      return;
    }

    const el = invalidFormItem?.el;

    if (!el) {
      return;
    }

    useScrollTo(el, props.scrollIntoViewOptions);
  }

  async function clearValidate () {
    await delay(0);

    formItems.value.forEach(formItem => formItem.clearValidate());
  }

  function setErrors (errors: Record<keyof IVFormRules, Array<string>>) {
    for (const [field, fieldErrors] of Object.entries(errors)) {
      const formItem = formItems.value.find(item => item.props?.prop === field);

      if (formItem) {
        formItem.setErrors(fieldErrors);
      }
    }
  }

  function registerFormItem (newFormItem: IVFormItemInstance) {
    const formItem = formItems.value.find(formItem => formItem.uid === newFormItem.uid);

    if (!formItem) {
      formItems.value.push(newFormItem);
    }
  }

  function unregisterFormItem (oldFormItem: IVFormItemInstance) {
    formItems.value = formItems.value.filter(formItem => formItem.uid !== oldFormItem.uid);
  }

  function reset () {
    formItems.value.forEach(formItem => formItem.reset());

    clearValidate();
  }

  watch(validatableFormItems, formItems => {
    isValid.value = !formItems.length;
  }, {
    immediate: true
  });

  watch(modelValue, async () => {
    try {
      await validate(true);

      isValid.value = true;
    } catch (error) {
      isValid.value = false;
    }
  }, {
    deep: true
  });

  defineExpose<IVFormExpose>({
    validate,
    clearValidate,
    reset,
    setErrors
  });

  provide(VFormContextKey, {
    props,
    modelValue,
    registerFormItem,
    unregisterFormItem
  });
</script>
