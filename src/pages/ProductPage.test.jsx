import { render, waitFor } from '@testing-library/react';
import ProductPage from './ProductPage';

test('ProductPage', async () => {
  await waitFor(() => {
    render(<ProductPage />);
  });
});
