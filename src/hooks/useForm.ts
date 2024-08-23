import { ChangeEvent, useMemo, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);
  const isFormValid = useMemo(() => {
    for (let field in formState) {
      if (!formState[field]) return false;
    }
    return true;
  }, [formState]);

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    console.log(name);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    ...formState,
    onInputChange,
    isFormValid,
  };
};
