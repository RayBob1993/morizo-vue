import type { Ref, ModelRef } from 'vue';
import type { ISizeProp, IThemeProp, IDirectionProp } from '../../props';
import type { Maybe } from '../../types';

export type IVTabValue = number | string;
export type IVTabsModelValue = Maybe<IVTabValue>;

export type IVTabsProps = {
  modelValue: IVTabsModelValue;
  scrollable?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp> & Partial<IDirectionProp>;

export interface IVTabProps {
  title?: string;
  value: IVTabValue;
}

export interface IVTabsEmits {
  (event: 'change', payload: IVTabsModelValue): void;
}

export interface IVTabSlots {
  default?: (props: {
    isActive: boolean;
  }) => any;
  title?: (props: {
    isActive: boolean;
  }) => any;
}

export interface IVTabContext {
  uid: string;
  props: IVTabProps;
  slots: IVTabSlots;
}

export interface IVTabsContext {
  props: IVTabsProps;
  modelValue: ModelRef<IVTabsModelValue>;
  tabs: Ref<Array<IVTabContext>>;
  onChange: (value: IVTabValue) => void;
  registerTab: (tab: IVTabContext) => void;
  unregisterTab: (tab: IVTabContext) => void;
}

