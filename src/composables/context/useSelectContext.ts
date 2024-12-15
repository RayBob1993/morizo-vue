import { VSelectContextKey } from '../../keys';
import { inject } from 'vue';

export const useSelectContext = () => inject(VSelectContextKey);
