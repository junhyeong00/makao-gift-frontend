import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useOrdersStore from '../hooks/useOrdersStore';

import Orders from '../components/Orders';

export default function OrdersPage() {
  const navigate = useNavigate();

  const ordersStore = useOrdersStore();

  const { orders, totalPageCount } = ordersStore;

  const currentPage = ordersStore.currentPage || 1;

  useEffect(() => {
    ordersStore.fetchProducts(currentPage);
  }, []);

  const handlePageClick = (page) => {
    ordersStore.changePage(page);
  };

  const handleClickOrderDetail = (transactionId) => {
    navigate(`/orders/${transactionId}`, {
      state: {
        orderId: transactionId,
      },
    });
  };

  return (
    <Orders
      orders={orders}
      totalPageCount={totalPageCount}
      handlePageClick={handlePageClick}
      handleClickOrderDetail={handleClickOrderDetail}
    />
  );
}
