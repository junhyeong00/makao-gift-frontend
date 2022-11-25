import OrderStore from './OrderStore';

test('OrderStore', async () => {
  const orderStore = new OrderStore();

  await orderStore.fetchOrder(1);

  expect(orderStore.order.name).toBe('신라면 1박스');
  expect(orderStore.order.maker).toBe('농심');
  expect(orderStore.order.purchaseCount).toBe(2);
  expect(orderStore.order.receiver).toBe('배준형');
  expect(orderStore.order.purchasePrice).toBe(30000);
});
