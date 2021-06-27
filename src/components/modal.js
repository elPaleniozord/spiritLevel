import React, {useContext, useRef, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const Context = React.createContext()

export const ModalProvider = ({children}) => {
  const modalRef = useRef()
  const [context, setContext] = useState()

  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  return (
    <div className='modal-container'>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
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
          <button onClick={onClose}>Close</button>
        </div>
      </div>, modalNode
    )
    :
    null
}