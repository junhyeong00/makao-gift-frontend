import { render, screen, waitFor } from '@testing-library/react';

import { productStore } from '../stores/ProductStore';

import Products from './Products';

test('Products', async () => {
  productStore.fetchProducts();

  render(<Products />);

  screen.getByText('평범한 선물은 주기도 민망하다구요?');

  await waitFor(() => {
    screen.getByText('제조사 1');
    screen.getByText('제조사 2');
  });
});
