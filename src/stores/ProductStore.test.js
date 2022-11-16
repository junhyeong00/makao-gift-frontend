import { waitFor } from '@testing-library/react';
import ProductStore from './ProductStore';

const context = describe;

describe('상품 목록 조회', () => {
  let productStore;

  beforeEach(() => {
    productStore = new ProductStore();
  });

  context('총 상품이 9개인 상태에서 1페이지를 확인할 때(1페이지당 8개씩)', () => {
    it('상품 8개 확인', async () => {
      await productStore.fetchProducts(1);

      expect(productStore.products.length).toBe(8);
      expect(productStore.totalPageCount).toBe(2);
      expect(productStore.products[0].name).toBe('상품 1');
    });
  });

  context('총 상품이 9개인 상태에서 2페이지를 확인할 때(1페이지당 8개씩)', () => {
    it('상품 1개 확인', async () => {
      await productStore.fetchProducts(2);

      await waitFor(() => {
        expect(productStore.products.length).toBe(1);
        expect(productStore.totalPageCount).toBe(2);
      });
    });
  });
});

describe('상품 상세 보기', () => {
  context('id 1번 상품의 상세 정보를 확인하는 경우', () => {
    it('id 1번 상품 정보 확인', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProduct(1);

      expect(productStore.product.id).toBe(1);
      expect(productStore.product.name).toBe('상품 1');
      expect(productStore.product.price).toBe(500);
    });
  });
});
