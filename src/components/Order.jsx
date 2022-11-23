/* eslint-disable no-nested-ternary */

import useOrderFormStore from '../hooks/useOrderFormStore';
import numberFormat from '../utils/numberFormat';

export default function Order({
  product, purchaseCount, purchasePrice, receiver, address, messageToSend,
  errors, onSubmit,
}) {
  const orderFormStore = useOrderFormStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div>
      <section>
        <img src="" alt="상품 이미지" />
        <div>
          <div>
            <p>{product.maker}</p>
            <p>{product.name}</p>
          </div>
          <div>
            <p>
              구매수량:
              {' '}
              {purchaseCount}
            </p>
            <p>
              총 상품금액:
              {' '}
              {numberFormat(purchasePrice)}
              원
            </p>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-receiver">
            받는 분 성함*
          </label>
          <input
            id="input-receiver"
            type="text"
            value={receiver}
            onChange={(event) => (
              orderFormStore.changeReceiver(event.target.value)
            )}
          />
          <p>
            { errors['2000']
              ? errors['2000']
              : errors['2002']
                ? errors['2002']
                : '3-7자까지 한글만 사용 가능'}
          </p>
        </div>
        <div>
          <label htmlFor="input-address">
            받는 분 주소*
          </label>
          <input
            id="input-address"
            type="text"
            value={address}
            onChange={(event) => (
              orderFormStore.changeAddress(event.target.value)
            )}
          />
          <p>
            {errors['2001']
              ? errors['2001']
              : '주소지를 입력해주세요'}
          </p>
        </div>
        <div>
          <label htmlFor="input-message">
            받는 분께 보내는 메세지
          </label>
          <input
            id="input-message"
            type="text"
            value={messageToSend}
            onChange={(event) => (
              orderFormStore.changeMessage(event.target.value)
            )}
          />
          <p>100글자 이내로 입력해주세요</p>
        </div>
        <button type="submit">
          선물하기
        </button>
      </form>
    </div>
  );
}
