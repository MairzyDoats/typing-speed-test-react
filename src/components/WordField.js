import React from 'react'
import Text from "./Text"

function WordField({ words }) {
  return (
    <div className="wordfield">
      <Text words={words} />
    </div>
  )
}

export default React.memo(WordField)