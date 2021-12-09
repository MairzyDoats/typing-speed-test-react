import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from './Main';

export default function TypeField() {
  const { handleStart, reset, stringOfWords, typeFieldRef, wordFieldRef } = useContext(GameContext);
  const [typedWords, setTypedWords] = useState("");

  useEffect(() => {
    /* Remove green or red color if the user deletes text */
    stringOfWords.forEach((letter, index) => {
      if (index > (typedWords.length - 1)) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
      }
    })

    /* Scroll to the last letter if the user deletes text */
    const typedLetters = typedWords.split("");
    const lastLetter = document.getElementById(`wordfield__letter-${typedLetters.length}`)
    if (lastLetter && lastLetter.offsetTop < wordFieldRef.current.scrollTop) {
      wordFieldRef.current.scrollTop = lastLetter.offsetTop;
    }

    typedLetters.forEach((letter, index) => {
      var currentLetter = document.getElementById(`wordfield__letter-${index}`);

      /* Scroll to the letter if you got to the bottom of the page */
      var letterOffsetBottom = currentLetter.offsetTop + document.getElementById(`wordfield__letter-${index}`).offsetHeight + 30;
      var wordFieldOffsetBottom = wordFieldRef.current.scrollTop + wordFieldRef.current.offsetHeight;
      if (letterOffsetBottom > wordFieldOffsetBottom) {
        wordFieldRef.current.scrollTop = letterOffsetBottom - wordFieldRef.current.offsetHeight;
      }

      /* Check if the letter matches the string and change the color to green or red */
      if (letter === stringOfWords[index]) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        currentLetter.classList.add("wordfield__text--right")
      } else {
        currentLetter.classList.remove("wordfield__text--right")
        currentLetter.classList.add("wordfield__text--wrong")
      }
    })
  }, [stringOfWords, typedWords, wordFieldRef]);

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
      onPaste={(e) => { e.preventDefault(); return false; }}
      onCopy={(e) => { e.preventDefault(); return false; }}
      onChange={(e) => { handleChange(e.target.value) }}
      value={typedWords}
    />
  )
}