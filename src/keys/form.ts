import type { InjectionKey } from 'vue';
import type { IVFormContext } from '../components/types';

export const VFormContextKey: InjectionKey<IVFormContext> = Symbol('VFormContextKey');
