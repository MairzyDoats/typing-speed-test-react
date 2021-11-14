import React from 'react'
import '../css/typefield.css'

export default function TypeField({ handleChange, typedWords }) {
  return (
    <textarea
      className="typefield"
      name="Typefield"
      id=""
      cols="50"
      rows="20"
      onPaste={(e) => { e.preventDefault(); return false; }}
      onCopy={(e) => { e.preventDefault(); return false; }}
      onChange={(e) => { handleChange(e.target.value) }}
      value={typedWords}
    />
  )
}