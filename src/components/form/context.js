import React from 'react';

const formContext = React.createContext();

export const useFormContext = () => React.useContext(formContext);

export const FormConsumer = formContext.Consumer;
export const FormProvider = ({ children, ...props }) => (
  <formContext.Provider value={props}>{children}</formContext.Provider>
);
