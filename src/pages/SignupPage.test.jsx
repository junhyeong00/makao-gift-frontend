import { render } from '@testing-library/react';
import SignupPage from './SignupPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => (
    navigate
  ),
}));

test('SignupPage', () => {
  render(<SignupPage />);
});
