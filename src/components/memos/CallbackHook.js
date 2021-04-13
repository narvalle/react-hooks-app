import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = ()=>{
  //     setCounter(counter+1);
  // }

  console.log('Generated CallbackHook');

  const increment = useCallback((factor) => {
    setCounter((c) => c + factor);
  }, [setCounter]);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <p>{counter}</p>
      <ShowIncrement increment={increment} />
    </div>
  );
};
