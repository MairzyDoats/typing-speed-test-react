import React from 'react';

export default function Header({ logo }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="ready set type logo" />
    </header>
  )
}
