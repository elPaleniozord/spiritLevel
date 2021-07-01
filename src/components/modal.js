import React, {useContext, useRef, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import '../styles/modal.css'

const Context = React.createContext()

export const ModalProvider = ({children, className}) => {
  const modalRef = useRef()
  const [context, setContext] = useState()

  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  return (
    <div className={className}>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} className='modal-container' />
    </div>
  )
}

export const Modal = ({onClose, children, ...props}) => {
  const modalNode = useContext(Context)

  return modalNode ? 
    ReactDOM.createPortal(
      <div className='modal-overlay'>
        <div className='modal-dialog'>
          {children}
          <button className='modal-button' onClick={onClose}>Understood</button>
        </div>
      </div>, modalNode
    )
    :
    null
}