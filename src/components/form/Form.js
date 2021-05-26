import React from 'react';
import T from 'prop-types';

import { FormProvider } from './context';
import useForm from './useForm';

function Form({ initialValue, onSubmit, ...props }) {
  const { handleSubmit, ...form } = useForm(initialValue);
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} {...props} />
    </FormProvider>
  );
}

Form.propTypes = {
  initialValue: T.object.isRequired,
  onSubmit: T.func.isRequired,
};

export default Form;
