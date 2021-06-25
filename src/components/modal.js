import React from 'react'

const Modal = () => {
  const handleClose = () => {
    console.log('Closig modal')
  }
  return (
    <div>
      <button onClick={handleClose}>Ok</button>
    </div>
  )
}

export default Modal