import { fireEvent, render, screen } from '@testing-library/react';

import Order from './Order';

const changeReceiver = jest.fn();
const changeAddress = jest.fn();
const changeMessage = jest.fn();

jest.mock('../hooks/useOrderFormStore', () => () => ({
  changeReceiver,
  changeAddress,
  changeMessage,
}));

describe('Order', () => {
  const onSubmit = jest.fn();

  function renderOrder({
    product, purchaseCount, purchasePrice,
    receiver, address, messageToSend, errors,
  }) {
    render((
      <Order
        product={product}
        purchaseCount={purchaseCount}
        purchasePrice={purchasePrice}
        receiver={receiver}
        address={address}
        messageToSend={messageToSend}
        errors={errors}
        onSubmit={onSubmit}
      />));
  }

  const product = {
    id: 1,
    maker: '산',
    name: '당근',
    price: 1_000,
    description: '건강에 최고',
  };

  const purchaseCount = 2;
  const purchasePrice = product.price * purchaseCount;
  const receiver = '산토끼';
  const address = '뉴욕';
  const messageToSend = '안녕';
  const errors = {};

  it('renders order information', () => {
    renderOrder({
      product,
      purchaseCount,
      purchasePrice,
      receiver,
      address,
      messageToSend,
      errors,
    });

    screen.getByText(/산/);
    screen.getByText(/당근/);
    screen.getByText(/2,000원/);
  });

  it('listens for submit button click event', () => {
    renderOrder({
      product,
      purchaseCount,
      purchasePrice,
      receiver,
      address,
      messageToSend,
      errors,
    });

    fireEvent.change(screen.getByLabelText(/받는 분 성함/), {
      target: { value: '배준형' },
    });

    fireEvent.change(screen.getByLabelText(/받는 분 주소/), {
      target: { value: '인천' },
    });

    fireEvent.change(screen.getByLabelText(/받는 분께 보내는 메세지/), {
      target: { value: '선물이다' },
    });

    fireEvent.click(screen.getByRole('button'), { name: '선물하기' });

    expect(changeReceiver).toBeCalled();
    expect(changeAddress).toBeCalled();
    expect(changeMessage).toBeCalled();

    expect(onSubmit).toBeCalled();
  });
});
