import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import { Button, Checkbox, InputText } from '../../shared';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const { email, password, remember } = credentials;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={handleChange}
      />
      <InputText
        type="password"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={handleChange}
      />
      <Checkbox
        label="Remember"
        name="remember"
        checked={remember}
        onChange={handleChange}
      />
      <Button disabled={!validate(validEmail, validPassword)}>Login</Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
