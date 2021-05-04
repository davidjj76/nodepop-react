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
      <Button full disabled={!validate(validEmail, validPassword)}>
        Login
      </Button>
      <div className="mt-6 border-t border-b border-gray-300">
        <Checkbox
          className="font-semibold"
          label="Remember this device"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
