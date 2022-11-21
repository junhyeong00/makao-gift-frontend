import ProductsStore from './ProductsStore';

const context = describe;

describe('상품 목록 조회', () => {
  let productsStore;

  beforeEach(() => {
    productsStore = new ProductsStore();
  });

  context('총 상품이 9개인 상태에서 1페이지를 확인할 때(1페이지당 8개씩)', () => {
    it('상품 8개 확인', async () => {
      await productsStore.fetchProducts(1);

      expect(productsStore.products.length).toBe(8);
      expect(productsStore.totalPageCount).toBe(2);
      expect(productsStore.products[0].name).toBe('상품 1');
    });
  });

  context('총 상품이 9개인 상태에서 2페이지를 확인할 때(1페이지당 8개씩)', () => {
    it('상품 1개 확인', async () => {
      await productsStore.fetchProducts(2);

      expect(productsStore.products.length).toBe(1);
      expect(productsStore.totalPageCount).toBe(2);
    });
  });
});
