import useProductStore from '../hooks/useProductStore';

export default function Pages() {
  const productStore = useProductStore();
  const { totalPageCount } = productStore;

  const pages = Array(totalPageCount).fill(0)
    .map((element, index) => index + 1);

  const handlePageClick = (page) => {
    productStore.changePage(page);
  };

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
