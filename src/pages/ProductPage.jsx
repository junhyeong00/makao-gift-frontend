import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Product from '../components/Product';

import useProductStore from '../hooks/useProductStore';

export default function ProductPage() {
  const productStore = useProductStore();

  const location = useLocation();

  const productId = location.pathname.split('/')[2];

  useEffect(() => {
    productStore.fetchProduct(productId);
  }, []);

  return (
    <Product />
  );
}
