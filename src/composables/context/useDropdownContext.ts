import { VDropdownContextKey } from '../../keys';
import { inject } from 'vue';

export const useDropdownContext = () => inject(VDropdownContextKey);
