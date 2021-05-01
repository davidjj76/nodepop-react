import React from 'react';

import { getTags } from '../../../api/adverts';
import { CheckboxGroup } from '../../shared';
import { capitalize } from '../../../utils/strings';

function SelectTags(props) {
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    getTags().then(setTags);
  }, []);

  const tagsOptions = tags.map(tag => ({
    value: tag,
    label: capitalize(tag),
  }));

  return <CheckboxGroup label="Tags" options={tagsOptions} {...props} />;
}

export default SelectTags;
