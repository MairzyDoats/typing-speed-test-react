import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from './Main';

export default function Timer() {
  const [countdown, setCountdown] = useState(60);
  const { countWords, start } = useContext(GameContext);

  useEffect(() => {
    if (!start) {
      setCountdown(60);
    }
    if (countdown > 0 && start) {
      var countDownTimeout = setTimeout(() => setCountdown((t) => t - 1), 1000);
    } else if (countdown === 0) {
      countWords();
      setCountdown(60);
    }
    return () => clearTimeout(countDownTimeout);
  }, [start, countdown, countWords])

  return (
    <div className="data-section__dataset">
      <h3 className="data-section__dataset__heading">Timer</h3>
      <p className="data-section__dataset__data">{countdown}</p>
    </div>
  )
}
