import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);
  function handleIncrement() {
    setPreviousCount(count);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  function handleDecrement() {
    setPreviousCount(count);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button>Count:{count}</button>
      <p>
        {count > previousCount
          ? 'increasing'
          : count < previousCount
          ? 'decreasing'
          : 'same'}
      </p>

      <button onClick={handleDecrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
