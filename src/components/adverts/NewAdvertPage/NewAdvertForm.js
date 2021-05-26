import T from 'prop-types';

import { Form, FormConsumer, Input } from '../../form';
import { InputFile } from '../../shared';
import SelectTags from '../SelectTags';

const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;

function NewAdvertForm(props) {
  return (
    <Form
      initialValue={{
        name: '',
        sale: true,
        price: 0,
        tags: [],
        photo: null,
      }}
      {...props}
    >
      <Input name="name" />
      <Input type="checkbox" name="sale" />
      <Input type="number" name="price" />
      <Input component={SelectTags} name="tags" />
      <Input component={InputFile} name="photo" />
      <FormConsumer>
        {({ validate }) => (
          <button disabled={!validate(validName, validPrice, validTags)}>
            Save
          </button>
        )}
      </FormConsumer>
    </Form>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
