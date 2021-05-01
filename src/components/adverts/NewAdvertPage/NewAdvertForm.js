import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import { Button, InputFile, RadioGroup } from '../../shared';
import { saleFilter } from '../AdvertsPage/filters';
import SelectTags from '../SelectTags';

const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;

function NewAdvertForm({ onSubmit }) {
  const { formValue: advert, handleChange, handleSubmit, validate } = useForm({
    name: '',
    sale: saleFilter.sell.value,
    price: 0,
    tags: [],
    photo: null,
  });
  const { name, sale, price, tags } = advert;

  const handleSubmitForm = newAdvert => {
    onSubmit({
      ...newAdvert,
      sale: newAdvert.sale === saleFilter.sell.value,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input name="name" value={name} onChange={handleChange} />
      <RadioGroup
        label="Sell or Buy"
        options={Object.values(saleFilter).filter(
          option => option.value !== saleFilter.all.value
        )}
        name="sale"
        value={sale}
        onChange={handleChange}
      />
      <input type="number" name="price" value={price} onChange={handleChange} />
      <SelectTags multiple name="tags" value={tags} onChange={handleChange} />
      <InputFile name="photo" onChange={handleChange} />
      <Button disabled={!validate(validName, validPrice, validTags)}>
        Save
      </Button>
    </form>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
