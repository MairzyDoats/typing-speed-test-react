import React, { useState, useEffect } from 'react';
import WordField from './WordField';
import TypeField from './TypeField';
import Timer from './Timer';
import ResetButton from './ResetButton';
import Modal from './Modal';
import { wordList } from '../const/randomWords';
import '../css/main.css'

export default function Main() {
  const [stringOfWords, setStringOfWords] = useState("");
  const [typedWords, setTypedWords] = useState("")
  const [countdown, setCountdown] = useState(60);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0)
  const [highscore, setHighScore] = useState(0);

  useEffect(() => {
    if (countdown > 0 && start) {
      var countDownTimeout = setTimeout(() => setCountdown((t) => t - 1), 1000);
    } else if (countdown === 0) {
      countWords();
    }
    return () => clearTimeout(countDownTimeout);
  }, [start, countdown])

  useEffect(() => {
    reset();
  }, [])

  useEffect(() => {
    compare();
  }, [typedWords])


  function reset() {
    setStart(false);
    setCountdown(60);
    var randomWords = "";
    for (var i = 0; i < 250; i++) {
      var word = wordList[Math.floor(Math.random() * wordList.length)] + " "
      if (!randomWords.includes(word)) { randomWords += word; }
      else {
        i--;
      }
    }
    setStringOfWords(randomWords);
    setTypedWords("");
  }

  function handleChange(value) {
    if (!start) {
      setStart(true);
      setTypedWords(value);
    } else if (value.includes("  ")) {
      const newString = value.replace("  ", " ")
      setTypedWords(newString);
    } else {
      setTypedWords(value);
    }
  }

  function compare() {
    stringOfWords.split("").forEach((letter, index) => {
      if (index > (typedWords.length - 1)) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
      }
    })
    typedWords.split("").forEach((letter, index) => {
      if (letter === stringOfWords.split("")[index]) {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--wrong")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--right")
      } else {
        document.getElementById(`wordfield__letter-${index}`).classList.remove("wordfield__text--right")
        document.getElementById(`wordfield__letter-${index}`).classList.add("wordfield__text--wrong")
      }
    })
  }

  function countWords() {
    var score = 0;
    typedWords.split(" ").forEach(word => {
      console.log(word);
      if (word === "") {
        return
      } else if (stringOfWords.split(" ").includes(word))
        score += 1;
    })
    setScore(score);
    setFinish(true)
  }


  return (
    <main className="main">
      {finish && <Modal score={score} />}
      <p>{start ? "yes" : "no"}</p>
      <Timer time={countdown} />
      <ResetButton reset={reset} />
      <WordField words={stringOfWords.split("")} />
      <TypeField typedWords={typedWords} handleChange={handleChange} />
    </main>
  )
}
