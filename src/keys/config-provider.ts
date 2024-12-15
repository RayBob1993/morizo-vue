import type { InjectionKey } from 'vue';
import type { IVConfigProviderContext } from '../components/types';

export const VConfigProviderContextKey: InjectionKey<IVConfigProviderContext> = Symbol('VConfigProviderContextKey');
