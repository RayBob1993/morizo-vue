import type { IVInputProps } from '../Input/types';

export type IVInputPasswordProps = Omit<IVInputProps, 'type' | 'nativeType'>;
