import ProductStore from './ProductStore';

describe('ProductStore', () => {
  describe('상품 상세 보기', () => {
    it('id 1번 상품 정보 확인', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProduct(1);

      expect(productStore.product.id).toBe(1);
      expect(productStore.product.name).toBe('상품 1');
      expect(productStore.product.price).toBe(500);
    });
  });

  describe('addCount', () => {
    it('수량과 금액이 증가함', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProduct(1);

      expect(productStore.selectedCount).toBe(1);
      expect(productStore.totalPrice).toBe(500);

      productStore.addCount();

      expect(productStore.selectedCount).toBe(2);
      expect(productStore.totalPrice).toBe(1000);
    });
  });

  describe('reduceCount', () => {
    it('수량과 금액이 변하지 않음', async () => {
      const productStore = new ProductStore();

      await productStore.fetchProduct(1);

      expect(productStore.selectedCount).toBe(1);
      expect(productStore.totalPrice).toBe(500);

      productStore.reduceCount();

      expect(productStore.selectedCount).toBe(1);
      expect(productStore.totalPrice).toBe(500);
    });
  });
});
