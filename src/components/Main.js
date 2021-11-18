import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import DataSection from './DataSection';
import TextfieldSection from './TextfieldSection';
import { wordList } from '../const/randomWords';

export const GameContext = React.createContext();

export default function Main() {
  const [stringOfWords, setStringOfWords] = useState([]);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const typeFieldRef = useRef();
  const TIME = 60;

  const gameContextValue = {
    countWords,
    handleReset,
    handleRestart,
    handleStart,
    highscore,
    reset,
    score,
    start,
    stringOfWords,
    typeFieldRef,
    TIME
  }

  useEffect(() => {
    handleReset();
  }, [])


  function handleReset() {
    setFinish(false);
    setStart(false);
    setReset(true);
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

  useEffect(() => {
    if (finish) {
      typeFieldRef.current.readOnly = true;
    } else {
      typeFieldRef.current.readOnly = false;
    }
  }, [finish])

  function handleStart() {
    if (finish) { return }
    if (!start) {
      setReset(false);
      setStart(true);
    }
  }

  function countWords() {
    setStart(false);
    var score = 0;
    typeFieldRef.current.value.split(" ").forEach(word => {
      console.log(word);
      if (word === "") {
        return
      } else if (stringOfWords.join("").includes(word))
        score += 1;
    })
    setScore(score);
    if (score > highscore) {
      setHighscore(score);
    }
    setFinish(true);
  }

  function handleRestart() {
    setFinish(false);
    handleReset();
  }


  return (
    <GameContext.Provider value={gameContextValue}>
      <main className="main">
        {finish && <Modal />}
        <DataSection />
        <TextfieldSection />
      </main>
    </GameContext.Provider>
  )
}
