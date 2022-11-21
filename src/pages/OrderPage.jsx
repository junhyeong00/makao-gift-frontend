import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import useOrderStore from '../hooks/useOrderStore';
import useUserStore from '../hooks/useUserStore';

import Order from '../components/Order';

export default function OrderPage() {
  const navigate = useNavigate();

  const location = useLocation();

  const { product, selectedCount: purchaseCount, totalPrice: purchasePrice } = location.state;

  const orderStore = useOrderStore();
  const userStore = useUserStore();

  useEffect(() => {
    orderStore.initialize({
      product,
      purchaseCount,
      purchasePrice,
    });
  }, []);

  const {
    receiver, address, messageToSend, errorMessages,
  } = orderStore;

  const handleSubmit = async () => {
    const { orderId } = await orderStore.order();

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
