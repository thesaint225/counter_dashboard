import { useEffect, useState } from 'react';
import Counter from './Counter';

type CounterType = {
  count: number;
  previousCount: number;
};

export default function MultipleCounter() {
  const [counters, setCounters] = useState<CounterType[]>(() => {
    const saved = localStorage.getItem('counters');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  function addCounter() {
    setCounters([...counters, { count: 0, previousCount: 0 }]);
  }

  function handleIncrement(index: number) {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index
          ? {
              ...counter,
              previousCount: counter.count,
              count: counter.count + 1,
            }
          : counter
      )
    );
  }
  function handleDecrement(index: number) {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index
          ? {
              ...counter,
              previousCount: counter.count,
              count: counter.count - 1,
            }
          : counter
      )
    );
  }

  function handleReset(index: number) {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index
          ? {
              ...counter,
              previousCount: counter.count,
              count: 0,
            }
          : counter
      )
    );
  }

  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>
      {counters.map((counter, index) => (
        <Counter
          key={index}
          count={counter.count}
          previousCount={counter.previousCount}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
          onReset={() => handleReset(index)}
        />
      ))}
    </div>
  );
}
