import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useCounter = ({ initialState = 0 }) => {
  const [counter, setCounter] = useState(initialState);

  console.log('Generated setCounter');

  //change factor in useSetInputValue,

  const increment = useCallback((factor) => {
    setCounter(c => c + factor);
  },
    [setCounter],
  );

  const decrement = useCallback((factor) => {
      setCounter(c => c - factor);
  }, [setCounter]);

  const reset = useCallback((initialState) => {
    setCounter(initialState);
  },[setCounter]);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

useCounter.propTypes = {
  initialState: PropTypes.number,
};

export default useCounter;
