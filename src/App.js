import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleCountDown() {
    setCount((c) => c - step);
  }

  function handleCountUp() {
    setCount((c) => c + step);
  }

  function handleStepDown() {
    if (step === 1) {
      return;
    }
    setStep((s) => s - 1);
  }

  function handleStepUp() {
    setStep((s) => s + 1);
  }

  function handleStepChange(e) {
    console.log(e.target);
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="counter">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => handleStepChange(e)}
        />
        {/* <button onClick={handleStepDown}>-</button> */}
        {/* <span>Step: {step}</span> */}
        <span> {step}</span>
        {/* <button onClick={handleStepUp}>+</button> */}
      </div>
      <div className="counter">
        <button onClick={handleCountDown}>-</button>
        {/* <span>Count: {count}</span> */}

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>

        <button onClick={handleCountUp}>+</button>
      </div>
      <DateDisplay offset={count} />
      {(step !== 1 || count !== 0) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

function DateDisplay({ offset }) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const dateString = date.toDateString();

  return (
    <p>
      {offset === 0 && <span>Today is</span>}
      {offset > 0 && <span>{offset} days from today is</span>}
      {offset < 0 && <span>{-offset} days ago was</span>}
      <span> {dateString}</span>
    </p>
  );
}
