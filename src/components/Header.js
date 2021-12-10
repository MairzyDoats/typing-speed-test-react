import React, { useState, useEffect } from 'react';

export default function Header({ logo, alternateLogo }) {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const updateDimensions = () => {
      setWidth(window.innerWidth)
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])


  return (
    <header className="header">
      <img className="header__logo" src={width > 600 ? logo : alternateLogo} alt="ready set type logo" />
      <h1 className="header__heading">Typing Speed Test</h1>
    </header>
  )
}
