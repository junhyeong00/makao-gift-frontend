import useStore from './useStore';

import { productsStore } from '../stores/ProductsStore';

export default function useProductsStore() {
  return useStore(productsStore);
}
