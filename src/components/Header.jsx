import { Link, useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import numberFormat from '../utils/numberFormat';

import useUserStore from '../hooks/useUserStore';

const Container = styled.header`
  display: flex;
  padding: 1em 2em;
  border-bottom: 1px solid rgb(217,217,217);

  nav {
    margin-left: .5em;

    ul {
      display: flex;
    }

    li {
      margin-right: .5em;
    }
  }
`;

const H1 = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

export default function Header() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <H1>선물하기</H1>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/products">스토어</Link>
          </li>
          <li>
            <Link to="/orders">주문조회</Link>
          </li>
          {accessToken ? (
            <>
              <li>
                <p>
                  내 잔액:
                  {' '}
                  {numberFormat(userStore.amount)}
                  원
                </p>
              </li>
              <li>
                <button type="button" onClick={handleLogout}>로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}
