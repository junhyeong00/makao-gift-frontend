import styled from 'styled-components';
import Pages from './Pages';
import Overview from './ui/Overview';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin: auto;
  width: 60%;
  padding: 2.4em 0 1em;
`;

const Maker = styled.p`
  color: #999999;
`;

const Receiver = styled.p`
  font-weight: bold;
`;

export default function Orders({
  orders, totalPageCount, handlePageClick, handleClickOrderDetail,
}) {
  return (
    <Container>
      <nav>
        {orders.length ? (
          <P>내가 주문한 내역입니다</P>
        ) : (
          <P>내가 주문한 내역이 없습니다</P>
        )}
        <Overview>
          {orders.map((order) => (
            <li key={order.id}>
              <button
                type="button"
                onClick={() => handleClickOrderDetail(order.id)}
              >
                <img src={order.imageUrl} alt="product" />
                <Maker>{order.maker}</Maker>
                <p>{order.name}</p>
                <Receiver>
                  To.
                  {' '}
                  {order.receiver}
                </Receiver>
              </button>
            </li>
          ))}
        </Overview>
      </nav>
      <Pages
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </Container>
  );
}
