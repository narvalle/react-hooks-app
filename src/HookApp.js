import React from "react";
import { SimpleForm } from "./components/useEffect/SimpleForm";
//import CounterApp from "./components/CounterApp";
import { CounterWithCustomHook } from "./components/useState/CounterWithCustomHook";

const HookApp = () => {
  return (
    <div className="p-5">
      <h1>HookApp</h1>
      <hr />
      <SimpleForm />
    </div>
  );
};

export default HookApp;
