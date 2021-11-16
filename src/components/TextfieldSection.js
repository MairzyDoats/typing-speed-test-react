import React from 'react'
import TypeField from './TypeField'
import WordField from './WordField'

export default function TextfieldSection() {
  return (
    <section className="textfield-section">
      <WordField />
      <TypeField />
    </section>
  )
}
