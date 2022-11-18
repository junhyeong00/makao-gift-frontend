import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import LoginForm from './LoginForm';

const register = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();
const handleClickRegister = jest.fn();

test('LoginForm', async () => {
  render(<LoginForm
    register={register}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    navigateToRegister={handleClickRegister}
  />);

  screen.getByText(/로그인/);

  fireEvent.change(screen.getByPlaceholderText('아이디'), {
    target: { value: 'test123' },
  });

  fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
    target: { value: 'Password1234!' },
  });
});
