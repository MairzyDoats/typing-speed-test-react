import React, { useState, useEffect } from 'react'

export default function TypeField({ wordsToType, handleStart, isReset }) {
  const [typedWords, setTypedWords] = useState("");

  useEffect(() => {
    wordsToType.forEach((letter, index) => {
      if (index > (typedWords.length - 1)) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
      }
    })
    typedWords.split("").forEach((letter, index) => {
      if (letter === wordsToType[index]) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--right")
      } else {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--wrong")
      }
    })
  }, [wordsToType, typedWords]);

  useEffect(() => {
    if (isReset) {
      setTypedWords("");
    }
  }, [isReset])

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