import React from 'react';
// import {MemoHook} from './components/memos/MemoHook';
import {CallbackHook} from './components/memos/CallbackHook';
// import { Father } from './components/tarea_memo/Father';
//import {Layout} from './components/useLayoutEffect/Layout'
//import { RealExampleRef } from './components/useRef/RealExampleRef';
//import { FocusScreen } from './components/useRef/FocusScreen';
//import { MultiplesCustomHooks } from "./components/examples/MultiplesCustomHooks";
//import { FormWithCustomHook } from "./components/useEffect/FormWithCustomHook";
//import { SimpleForm } from "./components/useEffect/SimpleForm";
//import CounterApp from "./components/CounterApp";
//import { CounterWithCustomHook } from "./components/useState/CounterWithCustomHook";

const HookApp = () => {
  return (
    <div className="p-5">
      <h1>HookApp</h1>
      <hr />
      <CallbackHook />
    </div>
  );
};

export default HookApp;
