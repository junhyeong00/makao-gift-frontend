import OrdersStore from './OrdersStore';

describe('OrdersStore', () => {
  const ordersStore = new OrdersStore();

  it('주문 목록 확인', async () => {
    await ordersStore.fetchOrders(1);

    expect(ordersStore.orders.length).toBe(2);
    expect(ordersStore.totalPageCount).toBe(1);
    expect(ordersStore.orders[0].name).toBe('신라면');
  });
});
