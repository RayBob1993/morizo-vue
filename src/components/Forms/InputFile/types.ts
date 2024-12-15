import type { ISizeProp, IThemeProp } from '../../../props';
import type { Maybe } from '../../../types';

export type IVInputFileModelValue = Maybe<File | Array<File>>;

export type IVInputFileProps = {
  modelValue: IVInputFileModelValue;
  disabled?: boolean;
  multiple?: boolean;
  draggable?: boolean;
  accept?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVInputFileEmits {
  (event: 'change', payload: Event): void;
}

export type IVInputFileDragEvents = Record<'drag' | 'dragstart' | 'dragend' | 'dragover' | 'dragenter' | 'dragleave' | 'drop', (event: DragEvent) => void>;
