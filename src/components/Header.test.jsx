import { render, screen } from '@testing-library/react';
import Header from './Header';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate() {
    return navigate;
  },
}));

test('Header', () => {
  render(<Header />);

  screen.getByText(/선물하기/);
  screen.getByText(/홈/);
  screen.getByText(/스토어/);
  screen.getByText(/주문조회/);
  screen.getByText(/회원가입/);
  screen.getByText(/로그인/);
});
