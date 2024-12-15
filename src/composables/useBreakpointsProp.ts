import { computed } from 'vue';

type IPropBreakpointPrefix = 'Xs' | 'Sm' | 'Md' | 'Lg' | 'Xl' | 'Xxl';

export function useBreakpointsProp (block: string, modifier: string, props?: Partial<Record<string, any>>) {
  function getModifierValue (prefix?: IPropBreakpointPrefix): string {
    if (!props) {
      return '';
    }

    return props[`${modifier}${prefix ?? ''}`];
  }

  const classList= computed<Record<string, boolean>>(() => {
    if (!props) {
      return {};
    }

    return {
      [`${block}--${modifier}-${getModifierValue()}`]: !!getModifierValue(),
      [`${block}--${modifier}-xs-${getModifierValue('Xs')}`]: !!getModifierValue('Xs'),
      [`${block}--${modifier}-sm-${getModifierValue('Sm')}`]: !!getModifierValue('Sm'),
      [`${block}--${modifier}-md-${getModifierValue('Md')}`]: !!getModifierValue('Md'),
      [`${block}--${modifier}-lg-${getModifierValue('Lg')}`]: !!getModifierValue('Lg'),
      [`${block}--${modifier}-xl-${getModifierValue('Xl')}`]: !!getModifierValue('Xl'),
      [`${block}--${modifier}-xxl-${getModifierValue('Xxl')}`]: !!getModifierValue('Xxl')
    };
  });

  return {
    classList
  };
}
