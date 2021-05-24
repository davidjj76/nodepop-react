import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { advertsCreateAction } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage({ onNewAdvert, error, loading }) {
  const handleSubmit = newAdvert => {
    onNewAdvert(newAdvert);
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <NewAdvertForm onSubmit={handleSubmit} />
    </Layout>
  );
}

NewAdvertPage.propTypes = {
  onNewAdvert: T.func.isRequired,
  loading: T.bool,
  error: T.object,
};

NewAdvertPage.defaultProps = {
  loading: false,
  error: null,
};

const mapStateToProps = state => ({
  ...getUi(state),
});

const mapDispatchToProps = dispatch => ({
  onNewAdvert: newAdvert => dispatch(advertsCreateAction(newAdvert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAdvertPage);
