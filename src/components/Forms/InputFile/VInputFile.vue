<template>
  <div
    class="v-input-file"
    :class="{
      ...classList,
      [`v-input-file--theme-${theme}`]: theme,
      'v-input-file--disabled': isDisabled,
      'v-input-file--draggable': draggable,
      'v-input-file--dragover': isDragover,
      'v-input-file--error': validationStatus?.isError
    }"
    v-on="dragListeners"
  >
    <label class="v-input-file__body">
      <div class="v-input-file__body-control">
        <div class="v-input-file__value">
          <div class="v-input-file__value-text">
            <template v-if="!modelValue">
              Прикрепить файл...
            </template>

            <template v-else>
              <template v-if="Array.isArray(modelValue)">
                <template v-for="file in modelValue">
                  {{ file.name }}
                </template>
              </template>

              <template v-else>
                {{ modelValue.name }}
              </template>
            </template>
          </div>
        </div>

        <input
          ref="input"
          class="v-input-file__native"
          type="file"
          :multiple="multiple"
          :accept="accept"
          :disabled="isDisabled"
          v-on="inputListeners"
        >
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import type { IVInputFileDragEvents, IVInputFileProps, IVInputFileModelValue, IVInputFileEmits } from './types';
  import { useForm, useListeners, useToggle, useBreakpointsProp } from '../../../composables';
  import { useTemplateRef, computed, useAttrs, onUnmounted } from 'vue';

  const props = defineProps<IVInputFileProps>();
  const emit = defineEmits<IVInputFileEmits>();

  const modelValue = defineModel<IVInputFileModelValue>({
    required: true
  });

  const input = useTemplateRef<HTMLInputElement>('input');

  const attrs = useAttrs();

  const listeners = useListeners(attrs);

  const { FormItem, validationStatus, isFormDisabled } = useForm();
  const { classList } = useBreakpointsProp('v-input-file', 'size', props);

  const [isDragover, setDragover] = useToggle();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  const inputListeners = computed(() => {
    return {
      ...listeners,
      change: (event: Event) => {
        const files = (event.target as HTMLInputElement).files as FileList;

        handleChange(files);

        emit('change', event);
      }
    };
  });

  const dragListeners: IVInputFileDragEvents = {
    drag: handleDrag,
    dragstart: handleDrag,
    dragend: (event: DragEvent) => {
      handleDrag(event);

      setDragover(false);
    },
    dragover: (event: DragEvent) => {
      handleDrag(event);

      setDragover(true);
    },
    dragenter: (event: DragEvent) => {
      handleDrag(event);

      setDragover(true);
    },
    dragleave: (event: DragEvent) => {
      handleDrag(event);

      setDragover(false);
    },
    drop: (event: DragEvent) => {
      handleDrag(event);

      setDragover(false);

      const files = (event.dataTransfer as DataTransfer).files as FileList;

      handleChange(files);
    }
  };

  function handleChange (files: FileList) {
    modelValue.value = props.multiple ? [...files] : files[0];
  }

  function handleDrag (event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  function reset () {
    modelValue.value = [];
  }

  FormItem?.registerField({
    reset
  });

  onUnmounted(() => {
    FormItem?.unregisterField();
  });
</script>

<style lang="scss">
  .v-input-file {
    &__body {
      cursor: pointer;
    }

    &__native {
      @include visible-hidden();
    }
  }
</style>
