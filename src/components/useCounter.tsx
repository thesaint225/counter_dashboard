import { useEffect, useState } from 'react';
import type { Counter } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'counters';

export default function useCounter() {
  const [counters, setCounters] = useState<Counter[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  const addCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      {
        id: uuidv4(),
        count: 0,
        previousCount: 0,
        name: `counter ${prevCounters.length + 1}`,
      },
    ]);
  };
}
