import { fireEvent, render, screen } from '@testing-library/react';
import SignupForm from './SignupForm';

const register = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();

test('SignupForm', () => {
  const errors = {};
  const signUpErrors = {};

  render(<SignupForm
    register={register}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    errors={errors}
    signUpErrors={signUpErrors}
  />);

  fireEvent.change(screen.getByLabelText('이름 :'), {
    target: { value: '배준형' },
  });

  fireEvent.change(screen.getByLabelText('아이디 :'), {
    target: { value: 'test123' },
  });

  fireEvent.change(screen.getByLabelText('비밀번호 :'), {
    target: { value: 'Password1234!' },
  });

  fireEvent.change(screen.getByLabelText('비밀번호 확인 :'), {
    target: { value: 'Password1234!' },
  });

  fireEvent.submit(screen.getByText('회원가입'));

  expect(handleSubmit).toBeCalled();
});
