import { render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';

const fetchProducts = jest.fn();

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => (
    navigate
  ),
}));

const products = [
  {
    id: 1, maker: '제조사 1', name: '상품 1', price: 500, description: '좋다',
  },
  {
    id: 2, maker: '제조사 2', name: '상품 2', price: 1000, description: '좋다',
  },
  {
    id: 3, maker: '제조사 3', name: '상품 3', price: 5000, description: '좋다',
  },
];

jest.mock('../hooks/useProductsStore', () => () => ({
  products,
  fetchProducts,
}));

test('ProductsPage', async () => {
  render(<ProductsPage />);

  screen.getByText(/제조사 1/);
});
