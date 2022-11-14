import useProductStore from '../hooks/useProductStore';

import numberFormat from '../utils/numberFormat';

export default function Products() {
  const productStore = useProductStore();

  const { products } = productStore;

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
      <div>
        <p>인기선물을 한 자리에 모았어요</p>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <button type="button">
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
      </div>
    </div>
  );
}
