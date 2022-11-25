import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 11em;
  background-color: rgb(223,242,251);
  text-align: center;

  div {
    width: 20%;
    margin: auto;
  }
`;

const Image = styled.img`
  margin-top: 3em;
  width: 17em;
  height: 17em;
`;

const Information = styled.dl`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  width: 40%;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid  #D9D9D9;
    padding: 1em;
  }

  dd {
    color: #666666;
  }
`;

const Maker = styled.p`
  margin-block: 10em 1em;
  color: #999999;
`;

const Name = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

export default function OrderDetail({
  order,
}) {
  return (
    <Container>
      <Background>
        <div>
          <Image src={order.imageUrl} alt="product" />
        </div>
      </Background>
      <Maker>{order.maker}</Maker>
      <Name>{order.name}</Name>
      <Information>
        <div>
          <dt>구매수량</dt>
          <dd>{order.purchaseCount}</dd>
        </div>
        <div>
          <dt>총 상품금액</dt>
          <dd>
            {numberFormat(order.purchasePrice)}
            원
          </dd>
        </div>
        <div>
          <dt>구매일</dt>
          <dd>{order.createdAt}</dd>
        </div>
        <div>
          <dt>받는 분</dt>
          <dd>{order.receiver}</dd>
        </div>
        <div>
          <dt>받는 분 주소</dt>
          <dd>{order.address}</dd>
        </div>
        <div>
          <dt>받는 분께 보내는 메세지</dt>
          <dd>{order.messageToSend}</dd>
        </div>
      </Information>
    </Container>
  );
}
