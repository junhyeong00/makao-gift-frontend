import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import { productStore } from '../stores/ProductStore';

import Product from './Product';

const context = describe;

const handleAddCount = jest.fn();
const handleReduceCount = jest.fn();

describe('Product', () => {
  render(<Product />);

  test('id 1번 상품 상세 정보 확인', async () => {
    productStore.fetchProduct(1);

    await waitFor(() => {
      screen.getByText('제조사 1');
      screen.getByText('상품 1');
      screen.getByText('좋다');
    });
  });

  test('+ 버튼을 누른 경우', () => {
    it('개수가 2로 증가', async () => {
      fireEvent.click(screen.getByText('+'));

      screen.getByText('2');
      expect(handleAddCount).toBeCalled();
    });
  });

  context('- 버튼을 누른 경우', () => {
    it('개수가 변하지 않음', () => {
      fireEvent.click(screen.getByText('-'));

      screen.getByText('1');
      expect(handleReduceCount).not.toBeCalled();
    });
  });
});
