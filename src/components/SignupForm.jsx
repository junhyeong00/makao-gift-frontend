/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';

import PrimaryButton from './ui/PrimaryButton';
import Error from './ui/Error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  h2 {
    font-size: 2em;
    font-weight: bold;
  }

  label {
    display: block;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #22DAAB;
  padding-top: 2em;
  width: 25%;
  color: #817f7f;
`;

const InputArea = styled.div`
  margin-block: .8em;
`;

const Input = styled.input`
  margin-block: .6em;
  padding: 1em 1.5em;
  width: 100%;

  border: ${(props) => (props.error ? '1px solid #ff0000' : '1px solid #CCC')};
  
  :focus {
    outline: 1px solid #22DAAB;
  }
`;

export default function SignupForm({
  register, handleSubmit, onSubmit, errors, signUpErrors,
}) {
  return (
    <Container>
      <h2>SIGN UP</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputArea>
          <label htmlFor="input-name">
            이름 :
          </label>
          <Input
            id="input-name"
            type="text"
            error={errors.name
              ? errors.name.message
              : null}
            {...register(
              'name',
              {
                required: { value: true, message: '이름을 입력해주세요' },
                pattern: { value: /^[가-힣]{3,7}$/, message: '이름을 다시 확인해주세요' },
              },
            )}
          />
          <Error>
            {errors.name
              ? errors.name.message
              : <strong>3-7자까지 한글만 사용 가능</strong>}
          </Error>
        </InputArea>
        <InputArea>
          <label htmlFor="input-userName">
            아이디 :
          </label>
          <Input
            id="input-userName"
            type="text"
            error={errors.userName
              ? errors.userName.message
              : signUpErrors['1007']
                ? signUpErrors['1007']
                : null}
            {...register(
              'userName',
              {
                required: { value: true, message: '아이디를 입력해주세요' },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*\d)[a-z\d]{4,16}$/,
                  message: '아이디를 다시 확인해주세요',
                },
              },
            )}
          />
          <Error>
            {errors.userName
              ? errors.userName.message
              : signUpErrors['1007']
                ? signUpErrors['1007']
                : <strong>영문소문자/숫자, 4~16자만 사용 가능</strong>}
          </Error>
        </InputArea>
        <InputArea>
          <label htmlFor="input-password">
            비밀번호 :
          </label>
          <Input
            id="input-password"
            type="text"
            error={errors.password
              ? errors.password.message
              : null}
            {...register(
              'password',
              {
                required: { value: true, message: '비밀번호를 입력해주세요' },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d(?=.*@$!%*#?&)]{8,}$/,
                  message: '비밀번호를 다시 확인해주세요',
                },
              },
            )}
          />
          <Error>
            {errors.password
              ? errors.password.message
              : <strong>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</strong>}
          </Error>
        </InputArea>
        <InputArea>
          <label htmlFor="input-confirm-password">
            비밀번호 확인 :
          </label>
          <Input
            id="input-confirm-password"
            type="text"
            error={errors.confirmPassword
              ? errors.confirmPassword.message
              : signUpErrors['1008']
                ? signUpErrors['1008']
                : null}
            {...register(
              'confirmPassword',
              { required: { value: true, message: '비밀번호를 입력해주세요' } },
            )}
          />
          <Error>
            {errors.confirmPassword
              ? errors.confirmPassword.message
              : signUpErrors['1008']
                ? signUpErrors['1008']
                : null}
          </Error>
        </InputArea>
        <PrimaryButton type="submit">
          회원가입
        </PrimaryButton>
      </Form>
    </Container>
  );
}
