/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

export default function LoginForm({
  register, handleSubmit, errors, onSubmit, navigateToRegister, loginError,
}) {
  const handleClickRegister = () => {
    navigateToRegister('/signup');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>USER LOGIN</h2>
      <div>
        <input
          id="input-userName"
          {...register(
            'userName',
            { required: { value: true, message: '아이디를 입력해주세요' } },
          )}
          placeholder="아이디"
        />
      </div>
      <div>
        <input
          id="input-password"
          {...register(
            'password',
            { required: { value: true, message: '비밀번호를 입력해주세요' } },
          )}
          placeholder="비밀번호"
        />
      </div>
      <p>
        {errors.userName
          ? errors.userName.message
          : errors.password
            ? errors.password.message
            : loginError || null}
      </p>
      <button type="submit">
        로그인하기
      </button>
      <button
        type="button"
        onClick={handleClickRegister}
      >
        회원가입
      </button>
    </form>
  );
}
