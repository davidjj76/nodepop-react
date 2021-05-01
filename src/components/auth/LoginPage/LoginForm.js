import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import { Button, Checkbox } from '../../shared';

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
      <input name="email" value={email} onChange={handleChange} />
      <input
        type="password"
        name="password"
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
