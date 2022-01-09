import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from './Main';

export default function Timer() {
  const { countWords, start, TIME } = useContext(GameContext);
  const [countdown, setCountdown] = useState(TIME);
  const [startTime, setStartTime] = useState();


  useEffect(() => {
    if (!start) return

    const currentStartTime = new Date()
    setStartTime(currentStartTime)
  }, [start])

  useEffect(() => {

    const getTimerTime = () => {
      return Math.floor((new Date() - startTime) / 1000)
    }

    if (!start) {
      setCountdown(TIME);
    }
    if (countdown > 0 && start) {
      var countDownTimeout = setTimeout(() => setCountdown(TIME - getTimerTime()), 1000);
    } else if (countdown === 0) {
      countWords();
      setCountdown(TIME);
    }
    return () => clearTimeout(countDownTimeout);
  }, [start, countdown, countWords, TIME, startTime])

  return (
    <div className="data-section__dataset">
      <h3 className="data-section__dataset__heading">Timer</h3>
      <p className="data-section__dataset__data">{countdown}</p>
    </div>
  )
}
