import React from 'react'
import '../css/modal.css'

export default function Modal({ score }) {
  return (
    <div className="modal__screen">
      <div className="modal">
        <p className="modal__text">You scored {score} words!</p>
      </div>
    </div>
  )
}
