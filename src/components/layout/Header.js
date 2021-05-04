import T from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { AuthButton } from '../auth';
import { Button } from '../shared';

const headerClassName =
  'flex items-center justify-between p-6 border-b border-gray-300 bg-white';
function Header({ className }) {
  return (
    <header className={classNames(headerClassName, className)}>
      <Link to="/adverts">Nodepop</Link>
      <div>
        <Link to="/adverts/new">
          <Button>New advert</Button>
        </Link>
        <AuthButton className="ml-6" />
      </div>
    </header>
  );
}

Header.propTypes = {
  className: T.string,
};

export default Header;
