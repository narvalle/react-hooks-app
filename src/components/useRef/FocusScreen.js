import React, { useRef } from 'react';

export const FocusScreen = () => {
  const inputNameRef = useRef();

  const handleClick = () => {
    inputNameRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputNameRef}
        name="name"
        className="form-control"
        placeholder="Your Name"
      />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
