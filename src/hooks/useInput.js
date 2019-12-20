import { useState } from 'react';

const useInput = defaultValues => {
  const [values, setValues] = useState(defaultValues);

  const onChangeValuesHandler = e => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };

  return { values, onChangeValuesHandler };
};

export default useInput;
