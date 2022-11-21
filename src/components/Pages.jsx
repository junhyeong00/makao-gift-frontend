import useProductsStore from '../hooks/useProductsStore';

export default function Pages() {
  const productsStore = useProductsStore();
  const { totalPageCount } = productsStore;

  const pages = Array(totalPageCount).fill(0)
    .map((element, index) => index + 1);

  const handlePageClick = (page) => {
    productsStore.changePage(page);
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
