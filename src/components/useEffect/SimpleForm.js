import React, { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const { name, email } = formState;

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const onChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <div className="form-goup">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Insert your name"
          value={name}
          onChange={onChangeInput}
        />
        <br />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Insert your email"
          value={email}
          onChange={onChangeInput}
        />
        {name === 'coords' && <Message />}
      </div>
    </>
  );
};
