import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import { loginAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);

  const handleSubmit = credentials => {
    dispatch(loginAction(credentials));
  };

  const handleResetError = () => {
    dispatch(resetError());
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {loading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={handleResetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
