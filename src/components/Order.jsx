/* eslint-disable no-nested-ternary */

import styled from 'styled-components';
import useOrderFormStore from '../hooks/useOrderFormStore';
import numberFormat from '../utils/numberFormat';

import PrimaryButton from './ui/PrimaryButton';
import Error from './ui/Error';

const Container = styled.div`
  margin: 3.3em 15vw; 
  padding: 3em 10vw;
  border: 1px solid #D9D9D9;

  img {
    height: 8em;
    width: 8em;
    border-radius: 1em;
  }
`;

const ProductInformation = styled.section`
  display: flex;
  gap: 1.2em;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-top: .6em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    margin-block: 1em;
  }

  button {
    width: 50%;
    align-self: center;
  }
`;

const Input = styled.input`
  padding: 1em;
  margin-block: .1em .5em;

  border: ${(props) => (props.error ? '1px solid #ff0000' : '1px solid #a29f9f')};
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: .4em;

  strong {
    color: #FF424D;
    margin: 3px;
  }
`;

const Maker = styled.p`
  color: #999999;
`;

const Image = styled.img`
  width: 220px;
  height: 220px;
`;

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
    <Container>
      <ProductInformation>
        <Image src={product.imageUrl} alt="product" />
        <Description>
          <div>
            <Maker>{product.maker}</Maker>
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
        </Description>
      </ProductInformation>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="input-receiver">
            받는 분 성함
            <strong>*</strong>
          </Label>
          <Input
            id="input-receiver"
            type="text"
            error={errors['2000'] || errors['2002']}
            value={receiver}
            onChange={(event) => (
              orderFormStore.changeReceiver(event.target.value)
            )}
          />
          <Error>
            { errors['2000']
              ? errors['2000']
              : errors['2002']
                ? errors['2002']
                : <strong>3-7자까지 한글만 사용 가능</strong>}
          </Error>
        </div>
        <div>
          <Label htmlFor="input-address">
            받는 분 주소
            <strong>*</strong>
          </Label>
          <Input
            id="input-address"
            type="text"
            error={errors['2001']}
            value={address}
            onChange={(event) => (
              orderFormStore.changeAddress(event.target.value)
            )}
          />
          <Error>
            {errors['2001']
              ? errors['2001']
              : <strong>주소지를 입력해주세요</strong>}
          </Error>
        </div>
        <div>
          <Label htmlFor="input-message">
            받는 분께 보내는 메세지
          </Label>
          <Input
            id="input-message"
            type="text"
            value={messageToSend}
            onChange={(event) => (
              orderFormStore.changeMessage(event.target.value)
            )}
          />
          <Error><strong>100글자 이내로 입력해주세요</strong></Error>
        </div>
        <PrimaryButton type="submit">
          선물하기
        </PrimaryButton>
      </Form>
    </Container>
  );
}
