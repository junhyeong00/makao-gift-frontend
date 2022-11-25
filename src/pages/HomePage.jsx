import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5em auto;
  width: 60%;

  h2 {
    margin: .8em 0;
    font-size: 2em;
  }

  strong {
    display: block;
    margin-top: .2em;
  }

  p:last-child {
    font-size: .9em;
  }
`;

const Wrapper = styled.div`
    margin: 3em 3em;
    margin-right: 4em;
    font-weight: bold;
`;

const Image = styled.div`
  width: 60vh;
  height: 60vh;
  background: url(https://user-images.githubusercontent.com/107493122/203552142-75019f26-6929-40f9-9c6f-da01c552dc47.png) no-repeat 0 50%;
  background-size: contain;
`;

export default function HomePage() {
  return (
    <Container>
      <Wrapper>
        <p>무얼 선물할 지 고민이라면</p>
        <h2>
          특별한
          <strong>아이템을 전하세요</strong>
        </h2>
        <p>마카오 선물하기에서만 볼 수 있는 특별한 아이템</p>
      </Wrapper>
      <Image />
    </Container>
  );
}
