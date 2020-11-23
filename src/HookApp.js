import React from "react";
import { FormWithCustomHook } from "./components/useEffect/FormWithCustomHook";
//import { SimpleForm } from "./components/useEffect/SimpleForm";
//import CounterApp from "./components/CounterApp";
//import { CounterWithCustomHook } from "./components/useState/CounterWithCustomHook";

const HookApp = () => {
  return (
    <div className="p-5">
      <h1>HookApp</h1>
      <hr />
      <FormWithCustomHook />
    </div>
  );
};

export default HookApp;
