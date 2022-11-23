import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import useOrderFormStore from '../hooks/useOrderFormStore';
import useUserStore from '../hooks/useUserStore';

import Order from '../components/Order';

export default function OrderPage() {
  const navigate = useNavigate();

  const location = useLocation();

  const { product, selectedCount: purchaseCount, totalPrice: purchasePrice } = location.state;

  const orderFormStore = useOrderFormStore();
  const userStore = useUserStore();

  useEffect(() => {
    orderFormStore.initialize({
      product,
      purchaseCount,
      purchasePrice,
    });
  }, []);

  const {
    receiver, address, messageToSend, errorMessages,
  } = orderFormStore;

  const handleSubmit = async () => {
    const { orderId } = await orderFormStore.order();

    if (orderId) {
      userStore.fetchUserAmount();
      navigate('/orders');
    }
  };

  return (
    <Order
      product={product}
      purchaseCount={purchaseCount}
      purchasePrice={purchasePrice}
      receiver={receiver}
      address={address}
      messageToSend={messageToSend}
      errors={errorMessages}
      onSubmit={handleSubmit}
    />
  );
}
