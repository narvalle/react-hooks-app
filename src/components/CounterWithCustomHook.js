import useCounter from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const {
    state: counter,
    increment: onIncrement,
    decrement: onDecrement,
    reset: onReset,
    factor:factorIncrement,
    onChangeInputValue,
  } = useCounter({initialState: 1, factorIncrement:2});

  return (
    <>
      <h1> Counter: {counter}</h1>
    <input type="number" value={factorIncrement} onChange={onChangeInputValue} />
      <hr />
      <button onClick={onIncrement} className="btn btn-primary">
        +{factorIncrement}
      </button>
      <button onClick={onDecrement} className="btn btn-danger m-2">
        -{factorIncrement}
      </button>
      <button onClick={onReset} className="btn btn-warning">
        RESET
      </button>
    </>
  );
};
