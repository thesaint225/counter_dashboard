import React, { useEffect, useState } from 'react';
import type { CounterType } from '../types';

const STORAGE_KEY = 'counters';

export default function useCounter() {
  const [counters, setsetCounters] = useState<CounterType[]>(() => {
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

  return <div></div>;
}
