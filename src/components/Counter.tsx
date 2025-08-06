import { useState } from 'react';

type CounterProps = {
  count: number;
  previousCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export default function Counter({
  count,
  previousCount,
  onIncrement,
  onDecrement,
  onReset,
}: CounterProps) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button>Count:{count}</button>
      <p>
        {count > previousCount
          ? 'increasing'
          : count < previousCount
          ? 'decreasing'
          : 'same'}
      </p>

      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}> reset</button>
    </div>
  );
}
