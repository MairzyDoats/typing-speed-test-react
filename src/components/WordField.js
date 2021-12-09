import React, { useContext } from 'react';
import Text from "./Text";
import { GameContext } from './Main';

function WordField() {
  const { wordFieldRef } = useContext(GameContext);

  return (
    <div ref={wordFieldRef} className="wordfield">
      <Text />
    </div>
  )
}

export default React.memo(WordField)