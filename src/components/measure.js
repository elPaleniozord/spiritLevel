import React from 'react'
import '../styles/measure.css'

const Measure = ({type, orientation}) => {
  let angle = type === 'horizontal' ? 90 - orientation.y || 0 : +orientation.y || 0

  const transformation = {
    transform: `scale(${angle / 90},1) translateX(50%)`
  }
  return (
    <div className={`measure measure__${type}`}>
      <div className='measure-display'>{`${angle.toFixed(2)}°`}</div>
      <div className='measure-fill' style={transformation}></div>
    </div>
  )
}

export default Measure