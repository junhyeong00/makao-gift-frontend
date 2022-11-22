export default function Pages({
  totalPageCount, handlePageClick,
}) {
  const pages = Array(totalPageCount).fill(0)
    .map((element, index) => index + 1);

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
