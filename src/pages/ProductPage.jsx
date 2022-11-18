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

  const { product, selectedCount, totalPrice } = productStore;

  const handleClickAddCount = () => {
    productStore.addCount();
  };

  const handleClickMinusCount = () => {
    productStore.reduceCount();
  };

  return (
    <Product
      product={product}
      selectedCount={selectedCount}
      totalPrice={totalPrice}
      onClickAddCount={handleClickAddCount}
      onClickMinusCount={handleClickMinusCount}
    />
  );
}
