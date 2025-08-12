import type { CounterProps, CounterTrend } from '../types/types';
// Import the TypeScript types for props and trend from a separate types file

export default function Counter({
  counter,
  onIncrement,
  onDecrement,
  onReset,
  onRemove,
  onNameChange,
}: CounterProps) {
  // Define the Counter component as a function that accepts props typed as CounterProps
  // Destructure props: the counter object and several event handler functions

  const getTrend = (): CounterTrend => {
    // Function to calculate the trend of the counter (increase, decrease, or same)
    if (counter.count > counter.previousCount) return 'increasing';
    // If current count is greater than previous count, trend is 'increasing'

    if (counter.count < counter.previousCount) return 'decreasing';
    // If current count is less than previous count, trend is 'decreasing'

    return 'same';
    // If counts are equal, trend is 'same'
  };

  const trend = getTrend();
  // Call getTrend and store the result in 'trend' to use in rendering

  return (
    <div>
      {/* Container for the entire counter component */}

      <div>
        {/* Section for editing the counter's name and removing the counter */}
        <input
          type='text'
          value={counter.name}
          // The current name of the counter shown in the input field
          onChange={(e) => onNameChange(e.target.value)}
          // When user types, call onNameChange with new input value
          placeholder='Counter Name'
          // Placeholder text shown when input is empty
        />
        <button onClick={onRemove}>Remove</button>
        {/* Button to remove this counter, triggers onRemove callback */}
      </div>

      <div>
        {/* Section for incrementing, showing count, and decrementing */}
        <button onClick={onDecrement}>-</button>
        {/* Button to decrease the counter value, triggers onDecrement */}
        <span>{counter.count}</span>
        {/* Displays the current count */}
        <button onClick={onIncrement}>+</button>
        {/* Button to increase the counter value, triggers onIncrement */}
      </div>

      <div>
        {/* Section showing the trend and a reset button */}
        <span>Trend: {trend}</span>
        {/* Display the current trend text */}

        {trend !== 'same' && (
          // Conditionally render this span only if trend is not 'same'
          <span>
            by {Math.abs(counter.count - counter.previousCount)}
            {/* Show the absolute difference between current and previous count */}
          </span>
        )}

        <button onClick={onReset}>Reset</button>
        {/* Button to reset this counter's count, triggers onReset */}
      </div>
    </div>
  );
}
