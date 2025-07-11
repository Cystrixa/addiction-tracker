'use client';

import { useState, useEffect } from 'react';

export default function Counter({ addiction }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`${addiction}-days`);
    if (saved) setDays(parseInt(saved));
  }, [addiction]);

  const reset = () => {
    setDays(0);
    localStorage.setItem(`${addiction}-days`, '0');
  };

  const increment = () => {
    const newDays = days + 1;
    setDays(newDays);
    localStorage.setItem(`${addiction}-days`, newDays.toString());
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold">Days Clean: {days}</h2>
      <div className="mt-2 space-x-2">
        <button onClick={increment} className="bg-green-600 px-4 py-1 rounded text-white">+1 Day</button>
        <button onClick={reset} className="bg-red-600 px-4 py-1 rounded text-white">Reset</button>
      </div>
    </div>
  );
}

