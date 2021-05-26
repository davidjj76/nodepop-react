import React from 'react';
import T from 'prop-types';

import useForm from '../../hooks/useForm';

const formContext = React.createContext();

export const useFormContext = () => React.useContext(formContext);

export const FormConsumer = formContext.Consumer;

function Form({ initialValue, onSubmit, ...props }) {
  const { handleSubmit, ...form } = useForm(initialValue);
  return (
    <formContext.Provider value={form}>
      <form onSubmit={handleSubmit(onSubmit)} {...props} />
    </formContext.Provider>
  );
}

Form.propTypes = {
  initialValue: T.object.isRequired,
  onSubmit: T.func.isRequired,
};

export default Form;
