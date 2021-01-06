import React, {useState} from 'react';
import useCounter from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter({
    initialState: 10,
    factorIncrement: 2,
  });
  const [show, setshow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />{' '}
      </h2>
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
