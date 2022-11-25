import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  a {
    margin-top: 1em;
    padding: 1.1em 3em;
    border: none;
    border-radius: 10px;
    background-color: rgb(34,218,171);
    color: #FFF;
    width: 21%;
    text-align: center;

    :hover {
        color: #006148;
    }

    :active {
        color: #FFF;
        background: #008C68;
    }
  }

  p {
    margin-block: .2em;
  }
`;

const H1 = styled.h1`
  margin: 1em;
  font-size: 1.7em;
  font-weight: bold;
`;

export default function SignupSuccessPage() {
  return (
    <Container>
      <H1>회원가입 완료</H1>
      <p>마카오 선물하기 회원가입이 완료되었습니다.</p>
      <p>정상적인 서비스 이용을 위해 로그인을 진행해주세요.</p>
      <Link to="/login">로그인하기</Link>
    </Container>
  );
}
