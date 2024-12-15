import type { InjectionKey } from 'vue';
import type { IVPaginationContext } from '../components/types';

export const VPaginationContextKey: InjectionKey<IVPaginationContext> = Symbol('VPaginationContextKey');
