import React from 'react'
import '../styles/measure.css'

const Measure = ({type, orientation, mode}) => {
  let angle = type === 'horizontal' ? 90 - orientation.beta || 0 : +orientation.beta || 0
  const transformation = {
    transform: `scale(${angle / 90},1) translateX(50%)`
  }
  if (mode !== 'rapporteur') return (
    <div className={`measure measure__${type}`}>
      <div className='measure-display'>{`${angle.toFixed(2)}°`}</div>
      <div className='measure-fill' style={transformation}></div>
    </div>
  )
  else return null
}

export default Measure