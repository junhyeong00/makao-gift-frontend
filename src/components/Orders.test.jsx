import { render, screen } from '@testing-library/react';
import Orders from './Orders';

const context = describe;

describe('Orders', () => {
  const handleClickOrderDetail = jest.fn();
  const handleClickPage = jest.fn();

  function renderOrders({ orders, totalPageCount }) {
    render((
      <Orders
        orders={orders}
        totalPageCount={totalPageCount}
        onClickOrderDetail={handleClickOrderDetail}
        onClickPage={handleClickPage}
      />
    ));
  }

  context('주문 목록이 존재하지 않을 때', () => {
    const orders = [];
    const totalPageCount = 0;

    it('예외 메세지 출력', () => {
      renderOrders({ orders, totalPageCount });

      screen.getByText('내가 주문한 내역이 없습니다');
    });
  });

  context('주문 목록이 1페이지 이내로 존재할 때', () => {
    const orders = [
      {
        id: 1,
        maker: '농심',
        name: '신라면',
        purchaseCount: 3,
        purchasePrice: 3000,
        receiver: '배준형',
        address: '인천',
        messageToSend: '맛있게 먹어',
        createdAt: '2022-10-21',
      },
      {
        id: 2,
        maker: '과일농장',
        name: '사과 1박스',
        purchaseCount: 3,
        purchasePrice: 60000,
        receiver: '산토끼',
        address: '뒷산',
        messageToSend: '안녕',
        createdAt: '2022-10-21',
      },
    ];
    const totalPageCount = 1;

    it('목록만큼의 상품 제조사, 상품 이름, 받는 사람, 페이지 넘버를 볼 수 있음', () => {
      renderOrders({ orders, totalPageCount });

      screen.getByText(/To. 산토끼/);
      screen.getByText(/사과 1박스/);
      screen.getByText(/신라면/);
      screen.getByText(/과일농장/);
      screen.getByText(/배준형/);
      screen.getByRole('button', { name: 1 });
    });
  });
});
