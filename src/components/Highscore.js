import React, { useContext } from 'react'
import { GameContext } from './Main';

export default function Highscore() {
  const { highscore } = useContext(GameContext);
  return (
    <div className="data-section__dataset">
      <h3>Highscore</h3>
      <p>{highscore}</p>
    </div>
  )
}
