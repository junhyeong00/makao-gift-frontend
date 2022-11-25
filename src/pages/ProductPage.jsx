import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import Product from '../components/Product';

import useProductStore from '../hooks/useProductStore';
import useUserStore from '../hooks/useUserStore';

export default function ProductPage() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const productStore = useProductStore();

  const location = useLocation();

  const productId = location.pathname.split('/')[2];

  useEffect(() => {
    productStore.fetchProduct(productId);
  }, []);

  const userStore = useUserStore();
  const { amount } = userStore;

  const {
    product, selectedCount, totalPrice, canBuy,
  } = productStore;

  const navigate = useNavigate();

  const handleClickAddCount = () => {
    productStore.addCount();
  };

  const handleClickMinusCount = () => {
    productStore.reduceCount();
  };

  const onClickBuy = () => {
    if (!accessToken) {
      navigate('/login', {
        state: `/products/${productId}`,
      });
    }

    if (amount < totalPrice) {
      productStore.discontinuePurchase();
      return;
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
      canBuy={canBuy}
      onClickAddCount={handleClickAddCount}
      onClickMinusCount={handleClickMinusCount}
      onClickBuy={onClickBuy}
    />
  );
}
