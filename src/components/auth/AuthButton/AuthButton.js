import { Link } from 'react-router-dom';

import { ConfirmationButton } from '../../shared';
import { useAuthContext } from '../context';
import { logout } from '../../../api/auth';

const AuthButton = props => {
  const { isLogged, handleLogout } = useAuthContext();

  const handleLogoutConfirm = async () => {
    await logout();
    handleLogout();
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure you want to logout?"
      onConfirm={handleLogoutConfirm}
      {...props}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

export default AuthButton;
