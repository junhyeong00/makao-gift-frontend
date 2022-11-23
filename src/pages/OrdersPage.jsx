import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import useOrdersStore from '../hooks/useOrdersStore';

import Orders from '../components/Orders';

export default function OrdersPage() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  const ordersStore = useOrdersStore();

  const { orders, totalPageCount } = ordersStore;

  const currentPage = ordersStore.currentPage || 1;

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }

    if (accessToken) {
      ordersStore.fetchProducts(currentPage);
    }
  }, []);

  const handlePageClick = (page) => {
    ordersStore.changePage(page);
  };

  const handleClickOrderDetail = (orderId) => {
    navigate(`/orders/${orderId}`, {
      state: {
        orderId,
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
