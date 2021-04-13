import { useState, useCallback } from 'react';

export const useSetInputValue = (value = 0) => {
  const [inputValue, setInputValue] = useState(value);

  console.log('Generated useSetInputValue');

  const onChangeInputValue = useCallback(
    (value) => {
      if (value > 1) {
        setInputValue(value);
      } else {
        setInputValue(1);
      }
    },
    [setInputValue],
  );

  return {
    inputValue,
    setInputValue,
    onChangeInputValue,
  };
};
