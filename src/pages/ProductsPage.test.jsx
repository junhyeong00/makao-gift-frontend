import { render, waitFor } from '@testing-library/react';
import ProductsPage from './ProductsPage';

test('ProductsPage', async () => {
  await waitFor(() => {
    render(<ProductsPage />);
  });
});
