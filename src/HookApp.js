import React from "react";
//import CounterApp from "./components/CounterApp";
import { CounterWithCustomHook } from "./components/CounterWithCustomHook";

const HookApp = () => {
  return (
    <div className="p-5">
      <h1>HookApp</h1>
      <hr />
      <CounterWithCustomHook />
    </div>
  );
};

export default HookApp;
