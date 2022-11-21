import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import OrderPage from './OrderPage';

const navigate = jest.fn();

const product = {
  id: 1,
  name: 'nike',
  price: 1_000,
  maker: 'maker',
  description: 'good',
};

const selectedCount = 1;
const totalPrice = product.price * selectedCount;

jest.mock('react-router-dom', () => ({
  useNavigate: () => (
    navigate
  ),
  useLocation: () => ({
    state: ({
      product,
      selectedCount,
      totalPrice,
    }),
  }),
}));

test('OrderPage', () => {
  render(<OrderPage />);

  screen.getByText(/nike/);
  screen.getByText(/maker/);
});
