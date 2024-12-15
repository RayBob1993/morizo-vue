import type { ModelRef } from 'vue';
import type { ISizeProp, IThemeProp } from '../../props';
import type { Maybe } from '../../types';

export type IVAccordionValue = string | number;
export type IVAccordionModelValue = Maybe<IVAccordionValue | Array<IVAccordionValue>>;

export type IVAccordionProps = {
  modelValue: IVAccordionModelValue;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface IVAccordionItemProps {
  value: IVAccordionValue
  title?: string
}

export interface IVAccordionEmits {
  (event: 'change', payload: Maybe<IVAccordionValue>): void;
}

export interface IVAccordionContext {
  props: IVAccordionProps
  modelValue: ModelRef<IVAccordionModelValue>;
  onChange: (value: Maybe<IVAccordionValue>) => void;
}

export interface IVAccordionItemSlots {
  default?: () => void;
  icon?: (props: {
    isActive: boolean
  }) => void;
  header?: (props: {
    isActive: boolean
  }) => void;
}
