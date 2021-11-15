import React from 'react'

export default function Letter({ index, letter }) {
  return (
    <span id={`wordfield__letter-${index}`}>{letter}</span>
  )
}
