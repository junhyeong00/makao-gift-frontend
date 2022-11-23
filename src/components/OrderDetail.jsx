import numberFormat from '../utils/numberFormat';

export default function OrderDetail({
  order,
}) {
  return (
    <div>
      {/* <image
        src=""
        alt="제품 사진"
      /> */}
      <p>{order.maker}</p>
      <p>{order.name}</p>
      <dl>
        <ul>
          <li>
            <dt>구매수량</dt>
            <dd>{order.purchaseCount}</dd>
          </li>
          <li>
            <dt>총 상품금액</dt>
            <dd>
              {numberFormat(order.purchasePrice)}
              원
            </dd>
          </li>
          <li>
            <dt>구매일</dt>
            <dd>{order.createdAt}</dd>
          </li>
          <li>
            <dt>받는 분</dt>
            <dd>{order.receiver}</dd>
          </li>
          <li>
            <dt>받는 분 주소</dt>
            <dd>{order.address}</dd>
          </li>
          <li>
            <dt>받는 분께 보내는 메세지</dt>
            <dd>{order.messageToSend}</dd>
          </li>
        </ul>
      </dl>
    </div>
  );
}
