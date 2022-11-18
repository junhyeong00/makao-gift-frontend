export default function LoginForm({
  register, handleSubmit, onSubmit, navigateToRegister,
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('userName', { required: true })}
          placeholder="아이디"
        />
      </div>
      <div>
        <input
          id="input-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: true })}
          placeholder="비밀번호"
        />
      </div>
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
