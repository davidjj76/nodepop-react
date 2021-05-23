import { Link } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';

import { ConfirmationButton } from '../../shared';
import { getIsLogged } from '../../../store/selectors';
import { logoutAction } from '../../../store/actions';

const AuthButton = ({ onLogout, isLogged }) => {
  const handleLogoutConfirm = () => {
    onLogout();
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

AuthButton.propTypes = {
  onLogout: T.func.isRequired,
  isLogged: T.bool,
};

AuthButton.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({
  isLogged: getIsLogged(state),
});

const mapDispatchToProps = {
  onLogout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
