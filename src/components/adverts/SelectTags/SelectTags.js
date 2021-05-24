import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';

import { tagsLoadAction } from '../../../store/actions';
import { getTags } from '../../../store/selectors';
import { CheckboxGroup } from '../../shared';

function SelectTags({ onMount, ...props }) {
  React.useEffect(() => {
    onMount();
  }, [onMount]);

  return <CheckboxGroup {...props} />;
}

SelectTags.propTypes = {
  onMount: T.func.isRequired,
};

const mapStateToProps = state => ({
  options: getTags(state),
});

const mapDispatchToProps = {
  onMount: tagsLoadAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTags);
