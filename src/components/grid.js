import React, { useContext } from 'react'
import { DisplayContext } from '../hooks/displayContext'
import '../styles/grid.css'

const Grid = ({orientation}) => {
  //deviation angle is changed to percents, dividing by 2 corresponds to half of screen width
  let x = orientation.gamma*100/90/2 || 0,
        y = orientation.beta*100/90/2 || 0

  // aspect ratio makes value display incorrectly on longer axis, need to adjust value with proper ratio
  const {dimensions} = useContext(DisplayContext)
  
  if(dimensions.height > dimensions.width) {
    y *= dimensions.height/dimensions.width
  } else {
    x *= dimensions.width/dimensions.height
  }

  const leveled = Math.abs(orientation.beta) < 5 && Math.abs(orientation.gamma) < 10

  return (
    <div className='grid'>
      <svg className='grid-ruler' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <line x1='25' x2='25' y1='0' y2='100' />
        <line x1='50' x2='50' y1='0' y2='100' />
        <line x1='75' x2='75' y1='0' y2='100' />

        <line x1='0' x2='100' y1='25' y2='25' />
        <line x1='0' x2='100' y1='50' y2='50' />
        <line x1='0' x2='100' y1='75' y2='75' />
      </svg>
      <svg className='grid-center' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='7' strokeWidth='.25' fill='none' />
      </svg>
      <svg className={`grid-crosshair${leveled ? ' grid-crosshair__leveled' : ''}`} viewBox='0 0 100 100'>
        <g id='crosshair' transform={`translate(${x}, ${y})`} transform-origin='center' fill='none' strokeWidth='.25'>
          <circle cx='50' cy='50'  r='2'  />
          <path d='M47.5,47.5 L52.5, 52.5 M52.5,47.5 L47.5, 52.5' />
        </g>
      </svg>
      
      <span className='grid-marker grid-marker__topLeft'>-45°</span>
      <div className='grid-marker grid-marker__topMid'>0°</div>
      <div className='grid-marker grid-marker__topRight'>45°</div>
    </div>
  )
}

export default Grid