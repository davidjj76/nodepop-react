import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';

import { useAuthContext } from '../context';
import usePromise from '../../../hooks/usePromise';
import { login } from '../../../api/auth';
import LoginForm from './LoginForm';

function LoginPage() {
  const { handleLogin } = useAuthContext();
  const location = useLocation();
  const history = useHistory();
  const { isPending: isLoading, error, execute, resetError } = usePromise();

  const handleSubmit = credentials => {
    execute(login(credentials))
      .then(handleLogin)
      .then(() => {
        const { from } = location.state || { from: { pathname: '/' } };
        history.replace(from);
      });
  };

  return (
    <div className="w-5/6 sm:w-2/3 md:w-1/2 my-12 py-6 px-6 shadow mx-auto rounded-sm">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
        <p className="mt-3 text-gray-800">
          New to Nodepop?{' '}
          <Link to="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
      <div className="mt-12">
        <LoginForm onSubmit={handleSubmit} />
      </div>
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
