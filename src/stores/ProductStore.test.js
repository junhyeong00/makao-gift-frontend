import ProductStore from './ProductStore';

const context = describe;

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
