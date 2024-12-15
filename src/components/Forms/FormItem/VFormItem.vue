<template>
  <div
    ref="root"
    class="v-form-item"
    :class="[
      {
        'v-form-item--disabled': isDisabled,
        'v-form-item--required': isRequired,
        'v-form-item--error': validationStatus.isError,
        'v-form-item--validating': validationStatus.isValidating,
        'v-form-item--success': validationStatus.isSuccess
      }
    ]"
  >
    <label
      v-if="title"
      class="v-form-item__label"
    >
      {{ title }}
    </label>

    <slot :validation-status="validationStatus"/>

    <v-form-item-errors
      v-if="validationErrors.length"
      :errors="validationErrors"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { ValidateError, Values, Rules } from 'async-validator/dist-types/interface';
  import type { IAsyncValidationError, IVFormItemField, IVFormItemProps, IVFormItemInstance, IVFormItemExpose, IVFormItemSlots, IVFormItemValidationStatus } from './types';
  import type { IVFormModelValues } from '../Form/types';
  import type { Maybe } from '../../../types';
  import { useForm } from '../../../composables';
  import { VFormItemContextKey } from '../../../keys';
  import { isObject, uuidv4, getProp, clone } from '../../../utils';
  import { useTemplateRef, ref, shallowRef, computed, watch, provide, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
  import Schema from 'async-validator';

  const props = defineProps<IVFormItemProps>();

  defineSlots<IVFormItemSlots>();

  const VFormItemErrors = defineAsyncComponent(() => import('./VFormItemErrors.vue'));

  const root = useTemplateRef<HTMLDivElement>('root');

  const { Form } = useForm();

  let initialValue: IVFormModelValues;

  const field = shallowRef<IVFormItemField>();

  const validationStatus = ref<IVFormItemValidationStatus>({
    isError: false,
    isValidating: false,
    isSuccess: false
  });

  const validationErrors = ref<Array<ValidateError>>([]);
  const validator = shallowRef<Schema>();

  const isDisabled = computed<boolean>(() => !!(props.disabled || Form?.props.disabled));
  const modelValue = computed<IVFormModelValues>(() => props.prop && Form?.modelValue.value && getProp(Form.modelValue.value, props.prop));
  const rules = computed<Maybe<Rules>>(() => props.prop && Form?.props?.rules && getProp(Form.props.rules, props.prop));

  const isRequired = computed<boolean>(() => {
    if (!rules.value) {
      return false;
    }

    if (Array.isArray(rules.value)) {
      return rules.value.find(rule => rule.required === true)?.required || false;
    }

    if (isObject(rules.value)) {
      return rules.value?.required || false;
    }

    return false;
  });

  const isValidatable = computed<boolean>(() => !!rules.value);

  function getDescriptor (): Values {
    const descriptor: Values = {};

    if (props.prop && rules.value) {
      descriptor[props.prop] = rules.value;
    }

    return descriptor;
  }

  function setDescriptor () {
    const descriptor = getDescriptor();

    validator.value = new Schema(descriptor);
  }

  async function validate (silent = false): Promise<boolean> {
    if (!props.prop) {
      return false;
    }

    const model = {
      [props.prop]: modelValue.value
    };

    if (!modelValue.value && !props.prop && !rules.value) {
      return false;
    }

    validationStatus.value.isValidating = true;

    if (!validator.value) {
      return false;
    }

    try {
      await validator.value?.validate(model, {
        firstFields: true
      });

      validationStatus.value.isError = false;
      validationStatus.value.isSuccess = true;

      return true;
    } catch (error) {
      validationStatus.value.isError = true;
      validationStatus.value.isSuccess = false;

      if (!silent) {
        const validationError = error as IAsyncValidationError;

        if (validationError.errors) {
          validationErrors.value = validationError.errors;
        }
      }

      return false;
    } finally {
      validationStatus.value.isValidating = false;
    }
  }

  function clearValidate () {
    validationErrors.value = [];
  }

  function setErrors (errors: Array<string>) {
    validationErrors.value = errors.map(error => ({ message: error }));
    validationStatus.value.isError = true;
    validationStatus.value.isSuccess = false;
    validationStatus.value.isValidating = false;
  }

  async function reset () {
    if (!modelValue.value || !props.prop) {
      return;
    }

    if (Form) {
      Form.modelValue.value[props.prop] = clone(initialValue);
    }

    field.value?.reset();

    await nextTick();

    clearValidate();
  }

  function registerField (child: IVFormItemField) {
    if (props.prop) {
      field.value = child;
    }
  }

  function unregisterField () {
    field.value = undefined;
  }

  watch(modelValue, () => validate());
  watch(rules, setDescriptor);
  watch(() => validationStatus.value.isSuccess, boolean => {
    if (boolean) {
      clearValidate();
    }
  });

  provide(VFormItemContextKey, {
    props,
    validationStatus,
    isRequired,
    registerField,
    unregisterField,
    validate,
    clearValidate,
    reset
  });

  const formItemInstance: IVFormItemInstance = {
    uid: uuidv4(),
    el: root,
    props,
    validationStatus,
    isValidatable,
    reset,
    validate,
    setErrors,
    clearValidate
  };

  Form?.registerFormItem(formItemInstance);

  onMounted(() => {
    if (!props.prop) {
      return;
    }

    setDescriptor();

    initialValue = clone(modelValue.value);
  });

  onUnmounted(() => {
    Form?.unregisterFormItem(formItemInstance);
  });

  defineExpose<IVFormItemExpose>({
    reset,
    validate,
    clearValidate
  });
</script>

<style lang="scss">
  .v-form-item {
    margin-bottom: var(--gutter-12);

    &__label {
      margin-bottom: var(--gutter-8);
    }
  }
</style>
