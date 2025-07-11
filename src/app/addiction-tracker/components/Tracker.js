'use client';

import { useState } from 'react';
import Counter from './Counter';
import InfoBox from './InfoBox';

export default function Tracker() {
  const [addiction, setAddiction] = useState('');

  return (
    <div className="space-y-4">
      <label className="block font-semibold">Choose an addiction to track:</label>
      <select
        value={addiction}
        onChange={(e) => setAddiction(e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="">-- Select --</option>
        <option value="smoking">Smoking</option>
        <option value="alcohol">Alcohol</option>
        <option value="phone">Phone/Social Media</option>
      </select>

      {addiction && (
        <>
          <Counter addiction={addiction} />
          <InfoBox addiction={addiction} />
        </>
      )}
    </div>
  );
}

