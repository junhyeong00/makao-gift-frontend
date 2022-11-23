import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useOrderStore from '../hooks/useOrderStore';

import OrderDetail from '../components/OrderDetail';

export default function OrdersDetailPage() {
  const orderStore = useOrderStore();

  const location = useLocation();

  const orderId = location.pathname.split('/')[2];

  useEffect(() => {
    orderStore.fetchOrder(orderId);
  }, []);

  return (
    <OrderDetail
      order={orderStore.order}
    />
  );
}
