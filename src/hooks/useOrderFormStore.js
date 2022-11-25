import useStore from './useStore';

import { orderFormStore } from '../stores/OrderFormStore';

export default function useOrderFormStore() {
  return useStore(orderFormStore);
}
