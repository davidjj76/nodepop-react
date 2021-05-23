import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { getIsLogged } from '../../../store/selectors';

const PrivateRoute = props => {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;
