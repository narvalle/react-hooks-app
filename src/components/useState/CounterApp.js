import React, { useState } from 'react';

const CounterApp = () => {
  const [state, setState] = useState({
    firstCounter: 10,
    secondCounter: 12,
  });

  const { firstCounter, secondCounter } = state;

  return (
    <>
      <h1>First {firstCounter}</h1>
      <h1>Second {secondCounter}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({ ...state, firstCounter: firstCounter + 1 });
        }}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
