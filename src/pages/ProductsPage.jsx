import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/Products';
import useProductsStore from '../hooks/useProductsStore';

export default function ProductsPage() {
  const navigate = useNavigate();

  const productsStore = useProductsStore();

  const { products, totalPageCount } = productsStore;

  const currentPage = productsStore.currentPage || 1;

  useEffect(() => {
    productsStore.fetchProducts(currentPage);
  }, []);

  const handlePageClick = (page) => {
    productsStore.changePage(page);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`, {
      state: {
        productId,
      },
    });
  };

  return (
    <Products
      products={products}
      totalPageCount={totalPageCount}
      handlePageClick={handlePageClick}
      handleProductClick={handleProductClick}
    />
  );
}
