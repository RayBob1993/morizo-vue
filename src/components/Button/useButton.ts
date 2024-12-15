import type { IVButtonProps } from './types';
import { useBreakpointsProp } from '../../composables';
import { computed } from 'vue';

export const useBaseButtonClassList = (block: string, props: IVButtonProps) => {
  const { classList } = useBreakpointsProp(block, 'size', props);

  return computed(() => [
    'v-button',
    {
      ...classList.value,
      [`v-button--theme-${props.theme}`]: props.theme,
      'v-button--plain': props.plain,
      'v-button--wide': props.wide
    }
  ]);
};
