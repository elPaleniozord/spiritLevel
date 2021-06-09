import React, { useEffect } from 'react'
import '../styles/measure.css'

const Measure = ({type, orientation}) => {
  let x=0, y=0

  x -= (orientation.z * 100 / 180 || 0)
  y -= (orientation.y * 100 / 90 || 0)

  const angle = Math.atan2(y, x) *  (180/Math.PI)
  const transformation = {
    transform: `scale(${angle / 90},1) translateX(50%)`
  }
  return (
    <div className={`measure measure__${type}`}>
      <div className='measure-display'>{`${(angle).toFixed(2)}°`}</div>
      <div className='measure-fill' style={transformation}></div>
    </div>
  )
}

export default Measure