import type { ShallowRef } from 'vue';

export type * from './props';
export type * from './directives/types';
export type * from './enums';
export type * from './components/types';

export type Maybe<T> = T | undefined;
export type TemplateRef<T> = Readonly<ShallowRef<T | null>>;
export type MaybeElement = Maybe<HTMLElement | SVGElement | null>;
