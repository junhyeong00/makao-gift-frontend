import { render, screen } from '@testing-library/react';
import OrdersDetailPage from './OrderDetailPage';

const order = {
  id: 1,
  maker: '농심',
  name: '신라면 1박스',
  purchaseCount: 2,
  purchasePrice: 30000,
  receiver: '배준형',
  address: '인천',
  messageToSend: '맛있게 먹어',
  createdAt: '2022-10-21',
};

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/orders/1',
  }),
}));

const fetchOrder = jest.fn();

jest.mock('../hooks/useOrderStore', () => () => ({
  order,
  fetchOrder,
}));

test('OrderDetailPage', () => {
  render(<OrdersDetailPage />);

  screen.getByText(/신라면/);
});
