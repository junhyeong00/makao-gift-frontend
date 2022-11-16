import { useEffect } from 'react';
import Products from '../components/Products';
import useProductStore from '../hooks/useProductStore';

export default function ProductsPage() {
  const productStore = useProductStore();

  const page = productStore.currentPage || 1;

  useEffect(() => {
    productStore.fetchProducts(page);
  }, []);

  return (
    <Products />
  );
}
