export type Counter = {
  id: string;
  count: number;
  previousCount: number;
  name: string;
};

export type CounterTrend = 'increasing' | 'decreasing' | 'same';

export type CounterProps = {
  counter: Counter;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  onRemove: () => void;
  onNameChange: (name: string) => void;
};
