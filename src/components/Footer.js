import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__copyright">©{year} <a className="footer__link" href="https://www.iamjulian.de">Julian Krüger</a></p>
    </footer>
  )
}
