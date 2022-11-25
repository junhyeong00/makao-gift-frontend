import styled from 'styled-components';
import numberFormat from '../utils/numberFormat';
import Pages from './Pages';
import Overview from './ui/Overview';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Banner = styled.div`
  height: 18vh;
  padding: 2em 20vw;
  background-color: rgb(191,232,243);
  /* background: url(https://user-images.githubusercontent.com/107493122/203775145-8f615e44-1c8c-48b0-aab2-e982d37c0c06.png) no-repeat 0 50%; */
  background-size: contain;

  display: flex;
  flex-direction: column;
  gap: 1.4em;
  
  span {
    display: block;
    margin-top: .1em;
  }

  h2 {
    font-weight: bold;
    font-size: 1.2em;
  }
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

const Price = styled.p`
  font-weight: bold;
`;

export default function Products({
  products, totalPageCount, handlePageClick, handleProductClick,
}) {
  return (
    <Container>
      <Banner>
        <p>평범한 선물은 주기도 민망하다구요?</p>
        <h2>
          작정하고 준비한
          <span>마카오톡 선물하기 아이템</span>
        </h2>
        <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      </Banner>
      <nav>
        {products.length ? (
          <P>인기선물을 한 자리에 모았어요</P>
        ) : (
          <P>상품이 존재하지 않습니다</P>
        )}
        <Overview>
          {products.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => handleProductClick(product.id)}
              >
                <img src={product.imageUrl} alt="product" />
                <Maker>{product.maker}</Maker>
                <p>{product.name}</p>
                <Price>
                  {numberFormat(product.price)}
                  원
                </Price>
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
