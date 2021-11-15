import React, { useState, useEffect } from 'react';
import WordField from './WordField';
import TypeField from './TypeField';
import Timer from './Timer';
import ResetButton from './ResetButton';
import Modal from './Modal';
import { wordList } from '../const/randomWords';

export default function Main() {
  const [stringOfWords, setStringOfWords] = useState([]);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

  useEffect(() => {
    handleReset();
  }, [])


  function handleReset() {
    setStart(false);
    var randomWords = "";
    for (var i = 0; i < 250; i++) {
      var word = wordList[Math.floor(Math.random() * wordList.length)] + " "
      if (!randomWords.includes(word)) { randomWords += word; }
      else {
        i--;
      }
    }
    setStringOfWords(randomWords.split(""));
  }

  function handleStart() {
    if (!start) {
      setStart(true);
    }
  }



  // function countWords() {
  //   var score = 0;
  //   typedWords.split(" ").forEach(word => {
  //     console.log(word);
  //     if (word === "") {
  //       return
  //     } else if (stringOfWords.split(" ").includes(word))
  //       score += 1;
  //   })
  //   setScore(score);
  //   setFinish(true);
  // }




  return (
    <main className="main">
      {finish && <Modal score={score} />}
      <p>{start ? "yes" : "no"}</p>
      <Timer isStart={start} />
      <ResetButton reset={handleReset} />
      <WordField words={stringOfWords} />
      <TypeField wordsToType={stringOfWords} handleStart={handleStart} isReset={reset} />
    </main>
  )
}
