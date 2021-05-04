import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header className="w-full z-50 sticky top-0" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: T.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
