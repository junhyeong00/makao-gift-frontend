import ProductStore from './ProductStore';

describe('ProductStore', () => {
  test('', () => {
    const productStore = new ProductStore();

    expect(productStore.products).toEqual([]);
  });
});
