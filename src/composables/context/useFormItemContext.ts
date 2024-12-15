import { VFormItemContextKey } from '../../keys';
import { inject } from 'vue';

export const useFormItemContext = () => inject(VFormItemContextKey, null);
