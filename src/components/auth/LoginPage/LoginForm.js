import { Form, FormConsumer, Input } from '../../form';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm(props) {
  return (
    <Form
      initialValue={{
        email: '',
        password: '',
        remember: false,
      }}
      {...props}
    >
      <Input name="email" />
      <Input type="password" name="password" />
      <Input type="checkbox" name="remember" />
      <FormConsumer>
        {({ validate }) => (
          <button disabled={!validate(validEmail, validPassword)}>Login</button>
        )}
      </FormConsumer>
    </Form>
  );
}

export default LoginForm;
