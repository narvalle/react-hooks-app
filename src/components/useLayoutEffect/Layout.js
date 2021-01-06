import React, { useRef, useLayoutEffect } from 'react';
import { useFetchApi } from '../../hooks/useFetchApi';
import useCounter from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {
  const { counter: counterState, increment: incrementCounter } = useCounter({
    initialState: 1,
  });
  const { data } = useFetchApi(
    `https://breakingbadapi.com/api/quotes/${counterState}`,
  );
  const { quote } = !!data && data[0];
  const quoteTag = useRef();

  useLayoutEffect(() => {
    console.log(quoteTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div className="m-3">
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <footer className="blockquote-footer" ref={quoteTag}>
          {quote}
        </footer>
      </blockquote>
      <button className="btn btn-primary" onClick={incrementCounter}>
        Next quote
      </button>
    </div>
  );
};
