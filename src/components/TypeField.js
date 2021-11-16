import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from './Main';

export default function TypeField() {
  const { handleStart, reset, stringOfWords, typeFieldRef } = useContext(GameContext);
  const [typedWords, setTypedWords] = useState("");

  useEffect(() => {
    stringOfWords.forEach((letter, index) => {
      if (index > (typedWords.length - 1)) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
      }
    })
    typedWords.split("").forEach((letter, index) => {
      if (letter === stringOfWords[index]) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--right")
      } else {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--wrong")
      }
    })
  }, [stringOfWords, typedWords]);

  useEffect(() => {
    if (reset) {
      setTypedWords("");
    }
  }, [reset])

  function handleChange(value) {
    handleStart();
    if (value.includes("  ")) {
      const newString = value.replace("  ", " ")
      setTypedWords(newString);
    } else {
      setTypedWords(value);
    }
  }

  return (
    <textarea
      ref={typeFieldRef}
      placeholder="Start typing to start the timer."
      className="typefield"
      name="Typefield"
      id="typefield"
      cols="50"
      rows="20"
      onPaste={(e) => { e.preventDefault(); return false; }}
      onCopy={(e) => { e.preventDefault(); return false; }}
      onChange={(e) => { handleChange(e.target.value) }}
      value={typedWords}
    />
  )
}