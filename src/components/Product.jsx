import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';
import PrimaryButton from './ui/PrimaryButton';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ProductImage = styled.img`
  width: 30em;
  height: auto;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 30em;
  width: 30em;
`;

const Name = styled.p`
  font-size: 1.5em;
`;

const Price = styled.span`
  font-size: 1.8em;
  font-weight: bold;
  padding-block: 1em;
  border-bottom: 1px solid #D9D9D9;
`;

const Detail = styled.dl`
  div {
    display: flex;
    padding-block: 1.3em;
    border-bottom: 1px solid #D9D9D9;
  }

  dt {
    width: 20%;
    
  }

  dd {
    color: #666666;
  }
`;

const TotalPrice = styled.span`
  margin-block: 1.2em .2em;
  text-align: end;
  font-size: 1em;

  span {
    font-size: 1.8em;
    font-weight: bold;
  }
`;

const CountForm = styled.dd`
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  padding: .4em;

  button {
    border: none;
    background: none;
    font-weight: bold;
  }

  span {
    padding-inline: .4em;
  }
`;

const Error = styled.p`
  margin: 1em;
  text-align: center;
  color: #FF424D;
`;

export default function Product({
  product, selectedCount, totalPrice, canBuy,
  onClickAddCount, onClickMinusCount, onClickBuy,
}) {
  const handleAddCount = () => {
    onClickAddCount();
  };

  const handleReduceCount = () => {
    onClickMinusCount();
  };

  const handleClickBuy = () => {
    onClickBuy();
  };

  return (
    <Container>
      <ProductImage src={product.imageUrl} alt="product" />
      <ProductDescription>
        <Name>{product.name}</Name>
        <Price>
          {numberFormat(product.price)}
          원
        </Price>
        <Detail>
          <div>
            <dt>제조사</dt>
            <dd>{product.maker}</dd>
          </div>
          <div>
            <dt>구매수량</dt>
            <CountForm>
              <button
                type="button"
                onClick={handleReduceCount}
                disabled={selectedCount < 2}
              >
                -
              </button>
              <span>
                {selectedCount}
              </span>
              <button
                type="button"
                onClick={handleAddCount}
              >
                +
              </button>
            </CountForm>
          </div>
          <div>
            <dt>상품설명</dt>
            <dd>{product.description}</dd>
          </div>
        </Detail>
        <TotalPrice>
          총 상품금액:
          {' '}
          <span>
            {numberFormat(totalPrice)}
            원
          </span>
        </TotalPrice>
        <PrimaryButton
          type="button"
          onClick={handleClickBuy}
        >
          선물하기
        </PrimaryButton>
        {!canBuy ? (
          <Error>❌잔액이 부족하여 선물하기가 불가능합니다❌</Error>
        ) : null}
      </ProductDescription>
    </Container>
  );
}
