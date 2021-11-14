import React from 'react'
import '../css/wordfield.css'

export default function WordField({ words }) {
  return (
    <div className="wordfield">
      <p className="wordfield__text">{words.map((letter, index) => <span key={index} id={`wordfield__letter-${index}`}>{letter}</span>)}</p>
    </div>
  )
}
