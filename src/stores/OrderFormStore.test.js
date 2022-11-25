import OrderFormStore from './OrderFormStore';

const context = describe;

describe('OrderFormStore', () => {
  let orderFormStore;

  beforeEach(() => {
    orderFormStore = new OrderFormStore();
  });

  describe('order', () => {
    context('when receiver is blank', () => {
      it('appear error message', async () => {
        await orderFormStore.order(1, 2, 6000, '', '인천', '안녕');

        expect(orderFormStore.errorMessages[2000]).toBe('성함을 입력해주세요');
      });
    });

    context('when address is blank', () => {
      it('appear error message', async () => {
        await orderFormStore.order(1, 2, 6000, '베준형', '', '안녕');

        expect(orderFormStore.errorMessages[2000]).toBe('성함을 입력해주세요');
      });
    });
  });
});
