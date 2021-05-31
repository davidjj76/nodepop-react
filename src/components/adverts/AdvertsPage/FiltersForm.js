import T from 'prop-types';

import { Form, Input, FormConsumer } from '../../form';
import SelectTags from '../SelectTags';
import { RadioGroup, SelectRange } from '../../shared';
import { advert } from '../propTypes';
import { saleFilter } from './filters';

function FiltersForm({ initialFilters, defaultFilters, onFilter, prices }) {
  const handleResetClick = ({ setFormValue }) => () => {
    setFormValue(defaultFilters);
    onFilter(defaultFilters);
  };

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <Form initialValue={initialFilters} onSubmit={onFilter}>
      <p>Filters</p>
      <Input type="text" name="name" />
      <Input
        component={RadioGroup}
        name="sale"
        options={Object.values(saleFilter)}
      />
      <Input
        component={SelectRange}
        name="price"
        min={min}
        max={max}
        style={{ width: 400, margin: 24 }}
        marks={{ [min]: min, [max]: max }}
      />
      <Input component={SelectTags} name="tags" />
      <button type="submit">Filter</button>
      <FormConsumer>
        {form => <button onClick={handleResetClick(form)}>Reset</button>}
      </FormConsumer>
    </Form>
  );
}

const filtersProp = T.shape({
  ...advert,
  sale: T.oneOf(Object.keys(saleFilter)).isRequired,
  price: T.arrayOf(T.number.isRequired).isRequired,
});

FiltersForm.propTypes = {
  initialFilters: filtersProp.isRequired,
  defaultFilters: filtersProp.isRequired,
  onFilter: T.func.isRequired,
  prices: T.arrayOf(T.number.isRequired).isRequired,
};

export default FiltersForm;
