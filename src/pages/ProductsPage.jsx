import { useEffect } from 'react';
import Products from '../components/Products';
import useProductsStore from '../hooks/useProductsStore';

export default function ProductsPage() {
  const productsStore = useProductsStore();

  const { products } = productsStore;

  const page = productsStore.currentPage || 1;

  useEffect(() => {
    productsStore.fetchProducts(page);
  }, []);

  return (
    <Products
      products={products}
    />
  );
}
