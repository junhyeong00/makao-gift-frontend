import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import { useForm } from 'react-hook-form';

import useUserStore from '../hooks/useUserStore';

import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { userName, password } = data;
    const accessToken = await userStore.login({ userName, password });
    if (accessToken) {
      setAccessToken(accessToken);
      navigate('/');
    }
  };

  const handleClickRegister = (path) => {
    navigate(path);
  };

  return (
    <LoginForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      navigateToRegister={handleClickRegister}
    />
  );
}
