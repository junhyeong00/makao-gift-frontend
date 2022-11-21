import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import Product from '../components/Product';

import useProductStore from '../hooks/useProductStore';

export default function ProductPage() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const productStore = useProductStore();

  const location = useLocation();

  const productId = location.pathname.split('/')[2];

  useEffect(() => {
    productStore.fetchProduct(productId);
  }, []);

  const { product, selectedCount, totalPrice } = productStore;

  const navigate = useNavigate();

  const handleClickAddCount = () => {
    productStore.addCount();
  };

  const handleClickMinusCount = () => {
    productStore.reduceCount();
  };

  const onClickBuy = () => {
    if (!accessToken) {
      navigate('/login');
    }

    if (accessToken) {
      navigate('/order', {
        state: { product, selectedCount, totalPrice },
      });
    }
  };

  return (
    <Product
      product={product}
      selectedCount={selectedCount}
      totalPrice={totalPrice}
      onClickAddCount={handleClickAddCount}
      onClickMinusCount={handleClickMinusCount}
      onClickBuy={onClickBuy}
    />
  );
}
