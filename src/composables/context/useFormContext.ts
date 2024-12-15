import { VFormContextKey } from '../../keys';
import { inject } from 'vue';

export const useFormContext = () => inject(VFormContextKey, null);
