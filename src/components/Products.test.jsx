import { render, screen, waitFor } from '@testing-library/react';

import Products from './Products';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
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

describe('Products', () => {
  test('상품이 없을 때', async () => {
    render(<Products
      products={products}
    />);

    screen.getByText('평범한 선물은 주기도 민망하다구요?');

    await waitFor(() => {
      screen.getByText('제조사 1');
      screen.getByText('제조사 2');
    });
  });
});
