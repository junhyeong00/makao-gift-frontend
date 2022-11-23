import styled from 'styled-components';

const Container = styled.ul`
display: flex;
justify-content: center;
gap: .4em;
`;

const PageNumber = styled.button`
background: none;
border: none;
`;

export default function Pages({
  totalPageCount, handlePageClick,
}) {
  const pages = Array(totalPageCount).fill(0)
    .map((element, index) => index + 1);

  return (
    <Container>
      {pages.map((page) => (
        <li key={page}>
          <PageNumber
            type="button"
            onClick={() => handlePageClick(page)}
          >
            {page}
          </PageNumber>
        </li>
      ))}
    </Container>
  );
}
