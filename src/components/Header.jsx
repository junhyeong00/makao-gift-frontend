import { Link, useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import numberFormat from '../utils/numberFormat';

import useUserStore from '../hooks/useUserStore';

const Container = styled.header`
  width: 100%;
  padding: 1em 2em;
  border-bottom: 1px solid rgb(217,217,217);

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: .5em;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      margin-inline: .9em;
    }

    a {
      &:focus, &:hover {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: #22DAAB;
      text-decoration-thickness: .2em;
      }
    }

    button {
    font-size: 1em;
    border: none;
    background: none;
  }
  }
`;

const H1 = styled.h1`
  margin-inline: 1em;
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
      <nav>
        <ul>
          <H1>선물하기</H1>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/products">스토어</Link>
          </li>
          <li>
            <Link to="/orders">주문조회</Link>
          </li>
        </ul>
        <ul>
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
