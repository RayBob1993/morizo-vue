import { VAccordionContextKey } from '../../keys';
import { inject } from 'vue';

export const useAccordionContext = () => inject(VAccordionContextKey);
