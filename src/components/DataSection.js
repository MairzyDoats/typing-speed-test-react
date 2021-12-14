import React from 'react';
import Highscore from './Highscore';
import Timer from './Timer';
import ResetButton from './ResetButton';

export default function DataSection() {
  return (
    <div className="data-section">
      <Timer />
      <ResetButton />
      <Highscore />
    </div>
  )
}
