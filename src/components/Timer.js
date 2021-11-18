import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from './Main';

export default function Timer() {
  const { countWords, start, TIME } = useContext(GameContext);
  const [countdown, setCountdown] = useState(TIME);


  useEffect(() => {
    if (!start) {
      setCountdown(TIME);
    }
    if (countdown > 0 && start) {
      var countDownTimeout = setTimeout(() => setCountdown((t) => t - 1), 1000);
    } else if (countdown === 0) {
      countWords();
      setCountdown(TIME);
    }
    return () => clearTimeout(countDownTimeout);
  }, [start, countdown, countWords, TIME])

  return (
    <div className="data-section__dataset">
      <h3 className="data-section__dataset__heading">Timer</h3>
      <p className="data-section__dataset__data">{countdown}</p>
    </div>
  )
}
