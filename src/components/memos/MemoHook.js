import React, { useState, useMemo } from 'react';
import useCounter from '../../hooks/useCounter';

export const MemoHook = () => {
  const { counter, increment } = useCounter({
    initialState: 500,
    factorIncrement: 2,
  });
  const [show, setshow] = useState(true);
  const widthProccess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahi vamos ...');
    }
    return `${iterations} iteraciones realizadas`;
  }
  const memoWidthProccess = useMemo(() => widthProccess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{memoWidthProccess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-warning ml-3"
        onClick={() => {
          setshow(!show);
        }}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
