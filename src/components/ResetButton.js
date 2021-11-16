import React, { useContext } from 'react'
import { GameContext } from './Main'

export default function ResetButton() {
  const { handleReset } = useContext(GameContext)
  return (
    <button className="data-section__button" onClick={handleReset}>Reset</button>
  )
}
