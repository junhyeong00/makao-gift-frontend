import { Link } from 'react-router-dom';

import Pages from './Pages';

export default function Orders({
  orders, totalPageCount, handlePageClick, handleClickOrderDetail,
}) {
  return (
    <div>
      <nav>
        {orders.length ? (
          <p>내가 주문한 내역입니다</p>
        ) : (
          <p>내가 주문한 내역이 없습니다</p>
        )}
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <button
                type="button"
                onClick={() => handleClickOrderDetail(order.id)}
              >
                <p>{order.maker}</p>
                <p>{order.name}</p>
                <p>
                  To.
                  {' '}
                  {order.receiver}
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
