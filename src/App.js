import React from "react";
import "./styles.css";
import Counter from "./Counter";
import Calculator from "./Calculator";
import LifeCycleA from "./LifeCycle/LifeCycleA";

export default function App() {
  return (
    <div className="App">
      <Counter name="Test App" />
      <hr />
      <Calculator name="Calculator" />
      <hr />
      <LifeCycleA />
    </div>
  );
}
