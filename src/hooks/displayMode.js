import {createContext, useState} from 'react'

export const DisplayContext = createContext({})

export const DisplayProvider = ({children, className}) => {
  const [display, setDisplay] = useState('rapporteur')

  return (
    <DisplayContext.Provider 
      className={className} 
      value={{
        display, setDisplay
      }}>
      {children}
    </DisplayContext.Provider>
  )
}

