import useStore from './useStore';

import { ordersStore } from '../stores/OrdersStore';

export default function useOrdersStore() {
  return useStore(ordersStore);
}
