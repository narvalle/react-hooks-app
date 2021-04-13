import React from 'react';
import { useFetchApi } from '../../hooks/useFetchApi';
import useCounter from '../../hooks/useCounter';

export const MultiplesCustomHooks = () => {
  const { counter: counterState, increment: incrementCounter } = useCounter({
    initialState: 1,
  });
  console.log('Counter value: ', counterState);
  const { loading, data } = useFetchApi(
    `https://breakingbadapi.com/api/quotes/${counterState}`,
  );
  const { author, quote } = !!data && data[0];

  return (
    <div className='m-3'>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loading . . . . . .</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'> {author} </p>
          <footer className='blockquote-footer'> {quote} </footer>
        </blockquote>
      )}
      <button className='btn btn-primary' onClick={incrementCounter}>
        Next quote
      </button>
    </div>
  );
};
