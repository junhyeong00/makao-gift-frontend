/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';

import PrimaryButton from './ui/PrimaryButton';
import Error from './ui/Error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #22DAAB;
  padding-top: 2em;
  width: 25%;
`;

const Input = styled.input`
  margin-bottom: .6em;
  padding: 1em 1.5em;
  width: 100%;

  border: ${(props) => (props.error ? '1px solid #ff0000' : '1px solid #a29f9f')};

  :focus {
    outline: 1px solid #22DAAB;
  }
`;

const SignUpButton = styled.button`
  border: none;
  margin-top: 1em;
  background: none;
`;

export default function LoginForm({
  register, handleSubmit, errors, onSubmit, navigateToRegister, loginError,
}) {
  const handleClickRegister = () => {
    navigateToRegister('/signup');
  };

  return (
    <Container>
      <Title>USER LOGIN</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="input-userName"
            error={errors.userName || loginError}
            {...register(
              'userName',
              { required: { value: true, message: '아이디를 입력해주세요' } },
            )}
            placeholder="아이디"
          />
        </div>
        <div>
          <Input
            id="input-password"
            error={errors.password || loginError}
            {...register(
              'password',
              { required: { value: true, message: '비밀번호를 입력해주세요' } },
            )}
            placeholder="비밀번호"
          />
        </div>
        <Error>
          {errors.userName
            ? errors.userName.message
            : errors.password
              ? errors.password.message
              : loginError || null}
        </Error>
        <PrimaryButton type="submit">
          로그인하기
        </PrimaryButton>
        <SignUpButton
          type="button"
          onClick={handleClickRegister}
        >
          회원가입
        </SignUpButton>
      </Form>
    </Container>
  );
}
