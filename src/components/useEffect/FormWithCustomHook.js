import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const [formValues, onChangeInput] = useForm({ name: '', email: '', password:'' });
  const { name, email, password } = formValues;

  const handledOnSubmit = (e)=>{
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handledOnSubmit}>
      <div className="form-goup">
          <h2>Form With Custom Hook</h2>
      <br />
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
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          value={password}
          onChange={onChangeInput}
        />
        <br />
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};
