import {createContext, useState} from 'react'
import { useEffect } from 'react'

export const DisplayContext = createContext({})

export const DisplayProvider = ({children, className}) => {
  const [display, setDisplay] = useState('rapporteur')

  const getDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    
    return {
      height,
      width
    }
  }

  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    const handleResize = () => setDimensions(getDimensions())

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <DisplayContext.Provider 
      className={className} 
      value={{
        display, setDisplay, dimensions
      }}
    >
      {children}
    </DisplayContext.Provider>
  )
}

