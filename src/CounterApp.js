import { useState } from "react";
import PropTypes from "prop-types";

// React function Component
const CounterApp = ({ value }) => {
  //state hook
  // return state, function to update state
  const [counter, setCounter] = useState(value);

  // use setState hook to update the counter and re-render the component
  const sum = () => setCounter((c) => c + 1);

  const res = () => setCounter((c) => c - 1);

  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={sum}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={res}>-1</button>
    </>
  );
};

// Props for react component
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
