import React from 'react';
import Text from "./Text";

function WordField() {

  return (
    <div className="wordfield">
      <Text />
    </div>
  )
}

export default React.memo(WordField)