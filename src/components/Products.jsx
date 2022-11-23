import numberFormat from '../utils/numberFormat';
import Pages from './Pages';

export default function Products({
  products, totalPageCount, handlePageClick, handleProductClick,
}) {
  return (
    <div>
      <div>
        <div>
          <p>평범한 선물은 주기도 민망하다구요?</p>
          <p>작정하고 준비한</p>
          <p>마카오톡 선물하기 아이템</p>
          <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
        </div>
      </div>
      <nav>
        {products.length ? (
          <p>인기선물을 한 자리에 모았어요</p>
        ) : (
          <p>상품이 존재하지 않습니다</p>
        )}
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => handleProductClick(product.id)}
              >
                <p>{product.maker}</p>
                <p>{product.name}</p>
                <p>
                  {numberFormat(product.price)}
                  원
                </p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Pages
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}
