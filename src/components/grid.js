import React from 'react'
import '../styles/grid.css'

const Grid = ({orientation}) => {
  const x = orientation.z*100/180 || 0,
        y = orientation.y*100/90 || 0

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
        <circle cx='50' cy='50' r='7' stroke='black' stroke-width='.25' fill='none' />
      </svg>

      <svg className='grid-crosshair' viewBox='0 0 100 100'>
        <g id='crosshair' transform={`translate(${x}, ${y})`} transform-origin='center' fill='none' stroke='black' stroke-width='.25'>
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