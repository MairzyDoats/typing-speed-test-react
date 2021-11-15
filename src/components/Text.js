import React from 'react'
import Letter from './Letter'

export default function Text({ words }) {
  return (
    <div>
      <p className="wordfield__text">{words.map((letter, index) => <Letter key={index} index={index} letter={letter} />)}</p>
    </div>
  )
}
