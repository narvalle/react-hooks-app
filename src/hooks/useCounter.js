import { useState } from "react";
import PropTypes from "prop-types";
import { useSetInputValue } from "./useSetInputValue";

const useCounter = ({ initialState = 0, factorIncrement = 1 }) => {
  const [state, setState] = useState(initialState);
  const {inputValue:factor, setInputValue:changeFactor, onChangeInputValue} = useSetInputValue(factorIncrement);

  const increment = () => {
    setState(state + factor);
  };

  const decrement = () => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
    factor,
    changeFactor,
    onChangeInputValue,
  };
};

useCounter.propTypes = {
  initialState: PropTypes.number,
  factorIncrement: PropTypes.number,
};

export default useCounter;
