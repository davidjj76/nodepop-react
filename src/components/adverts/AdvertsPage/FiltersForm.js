import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import SelectTags from '../SelectTags';
import { Button, InputText, RadioGroup, SelectRange } from '../../shared';
import { advert } from '../propTypes';
import { saleFilter } from './filters';

function FiltersForm({ initialFilters, defaultFilters, onFilter, prices }) {
  const {
    formValue: filters,
    setFormValue,
    handleChange,
    handleSubmit,
  } = useForm(initialFilters);

  const handleResetClick = () => {
    setFormValue(defaultFilters);
    onFilter(defaultFilters);
  };

  const { name, sale, price, tags } = filters;
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <p>Filters</p>
      <InputText
        name="name"
        label="Name"
        placeholder="Search by name"
        value={name}
        onChange={handleChange}
      />
      <RadioGroup
        options={Object.values(saleFilter)}
        label="Sell or Buy"
        name="sale"
        value={sale}
        onChange={handleChange}
      />
      <SelectRange
        min={min}
        max={max}
        value={price}
        name="price"
        onChange={handleChange}
        style={{ width: 400, margin: 24 }}
        marks={{ [min]: min, [max]: max }}
      />
      <SelectTags name="tags" value={tags} onChange={handleChange} />
      <Button type="submit">Filter</Button>
      <Button variant={Button.variants.secondary} onClick={handleResetClick}>
        Reset
      </Button>
    </form>
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
