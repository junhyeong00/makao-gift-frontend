import { useEffect } from 'react';
import Products from '../components/Products';
import useProductsStore from '../hooks/useProductsStore';

export default function ProductsPage() {
  const productsStore = useProductsStore();

  const { products, totalPageCount } = productsStore;

  const currentPage = productsStore.currentPage || 1;

  useEffect(() => {
    productsStore.fetchProducts(currentPage);
  }, []);

  const handlePageClick = (page) => {
    productsStore.changePage(page);
  };

  return (
    <Products
      products={products}
      totalPageCount={totalPageCount}
      handlePageClick={handlePageClick}
    />
  );
}
