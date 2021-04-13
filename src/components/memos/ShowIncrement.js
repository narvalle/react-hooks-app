import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('howIncrement is generate');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}>
      INCREMENT
    </button>
  );
});
