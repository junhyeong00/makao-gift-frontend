/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

export default function SignupForm({
  register, handleSubmit, onSubmit, errors, signUpErrors,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN UP</h2>
      <div>
        <label htmlFor="input-name">
          이름 :
        </label>
        <input
          id="input-name"
          type="text"
          {...register(
            'name',
            {
              required: { value: true, message: '이름을 입력해주세요' },
              pattern: { value: /^[가-힣]{3,7}$/, message: '이름을 다시 확인해주세요' },
            },

          )}
        />
        <p>
          {errors.name
            ? errors.name.message
            : '3-7자까지 한글만 사용 가능'}
        </p>
      </div>
      <div>
        <label htmlFor="input-userName">
          아이디 :
        </label>
        <input
          id="input-userName"
          type="text"
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
        <p>
          {errors.userName
            ? errors.userName.message
            : signUpErrors['1007']
              ? signUpErrors['1007']
              : '영문소문자/숫자, 4~16자만 사용 가능'}
        </p>
      </div>
      <div>
        <label htmlFor="input-password">
          비밀번호 :
        </label>
        <input
          id="input-password"
          type="text"
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
        <p>
          {errors.password
            ? errors.password.message
            : '8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함'}
        </p>
      </div>
      <div>
        <label htmlFor="input-confirm-password">
          비밀번호 확인 :
        </label>
        <input
          id="input-confirm-password"
          type="text"
          {...register(
            'confirmPassword',
            { required: { value: true, message: '비밀번호를 입력해주세요' } },
          )}
        />
        <p>
          {errors.confirmPassword
            ? errors.confirmPassword.message
            : signUpErrors['1008']
              ? signUpErrors['1008']
              : null}
        </p>
      </div>
      <button type="submit">
        회원가입
      </button>
    </form>
  );
}
