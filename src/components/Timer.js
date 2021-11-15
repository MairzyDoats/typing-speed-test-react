import React, { useState, useEffect } from 'react'

export default function Timer({ isStart }) {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!isStart) {
      setCountdown(60);
    }
    if (countdown > 0 && isStart) {
      var countDownTimeout = setTimeout(() => setCountdown((t) => t - 1), 1000);
    }
    return () => clearTimeout(countDownTimeout);
  }, [isStart, countdown])

  return (
    <div>
      <p>{countdown}</p>
    </div>
  )
}
