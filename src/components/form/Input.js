import React from 'react';
import T from 'prop-types';

import { useFormContext } from './Form';

function Input({ component: Component, ...props }) {
  const { formValue, handleChange } = useFormContext();

  const { type, name } = props;
  const inputProps = {
    [type === 'checkbox' ? 'checked' : 'value']: formValue[name],
    onChange: handleChange,
  };

  return <Component {...inputProps} {...props} />;
}

Input.propTypes = {
  component: T.oneOfType([T.string, T.func, T.object]),
  type: T.string,
  name: T.string.isRequired,
};

Input.defaultProps = {
  component: 'input',
  type: 'text',
};

export default Input;
