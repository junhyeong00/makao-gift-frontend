import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bold;
    margin: 1em 0;
  }

  strong {
    display: block;
    margin-top: .2em;
  }
`;

export default function HomePage() {
  return (
    <Container>
      <div>
        <p>무얼 선물할 지 고민이라면</p>
        <h2>
          특별한
          <strong>아이템을 전하세요</strong>
        </h2>
        <p>마카오 선물하기에서만 볼 수 있는 특별한 아이템</p>
      </div>
      <img src="" alt="" />
    </Container>
  );
}
