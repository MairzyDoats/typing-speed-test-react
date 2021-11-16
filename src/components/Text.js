import React, { useContext } from 'react'
import Letter from './Letter'
import { GameContext } from './Main';

export default function Text() {
  const { stringOfWords } = useContext(GameContext);
  return (
    <div>
      <p className="wordfield__text">{stringOfWords.map((letter, index) => <Letter key={index} index={index} letter={letter} />)}</p>
    </div>
  )
}
