import React, { useContext } from 'react'
import { GameContext } from './Main'

export default function Modal() {
  const { score, handleRestart } = useContext(GameContext);

  return (
    <div className="modal__screen">
      <div className="modal">
        <p className="modal__text">You scored {score} words!</p>
        <button className="modal__button" onClick={handleRestart}>OK, cool!</button>
      </div>
    </div>
  )
}
