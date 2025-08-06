import { useState } from 'react';
import MultipleCounter from './components/MultipleCounter';

function App() {
  const [version, setVersion] = useState(0);
  function handleHardRest() {
    localStorage.removeItem('counters');
    setVersion((v) => v + 1);
  }
  return (
    <>
      <MultipleCounter key={version} />
      <button onClick={handleHardRest}>hard Rest</button>
    </>
  );
}

export default App;
