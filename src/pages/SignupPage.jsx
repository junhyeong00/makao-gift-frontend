import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useUserStore from '../hooks/useUserStore';

import SignupForm from '../components/SignupForm';

export default function SignupPage() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const userStore = useUserStore();

  const { signUpErrors } = userStore;

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const {
      name, userName, password, confirmPassword,
    } = data;
    const registeredName = await userStore.register({
      name, userName, password, confirmPassword,
    });
    if (registeredName) {
      navigate('/signup/success');
    }
  };

  return (
    <SignupForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      signUpErrors={signUpErrors}
    />
  );
}
