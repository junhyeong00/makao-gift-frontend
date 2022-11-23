import { render, screen } from '@testing-library/react';

import OrderDetail from './OrderDetail';

test('OrderDetail', () => {
  const order = {
    id: 1,
    maker: '농심',
    name: '신라면 1박스',
    purchaseCount: 2,
    purchasePrice: 30000,
    receiver: '배준형',
    address: '인천',
    messageToSend: '맛있게 먹어',
    createdAt: '2022-10-21',
  };

  render((
    <OrderDetail order={order} />
  ));

  screen.getByText(/농심/);
  screen.getByText(/신라면 1박스/);
  screen.getByText('구매수량');
  screen.getByText('2');
  screen.getByText('총 상품금액');
  screen.getByText(/30,000원/);
  screen.getByText('구매일');
  screen.getByText(/2022-10-21/);
  screen.getByText('받는 분');
  screen.getByText(/배준형/);
  screen.getByText('받는 분 주소');
  screen.getByText(/인천/);
  screen.getByText('받는 분께 보내는 메세지');
  screen.getByText(/맛있게 먹어/);
});
