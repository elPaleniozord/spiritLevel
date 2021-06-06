import React from 'react'
import '../styles/grid.css'

const Grid = ({orientation}) => {
  const x = orientation.z*100/180 || 0,
        y = orientation.y*100/90 || 0
  console.log(x,y)
  return (
      <svg className='grid' viewBox='0 0 100 100' 
            vectorEffect='non-scaling-stroke' 
            stroke='black' stroke-width='.25'
            fill='none'
      >
        <defs>
          <line id='line' x1='0' y1='25' x2='100' y2='25'  />
        </defs>

        <g id='crosshair' transform={`translate(${x}, ${y})`}>
          <circle cx='50' cy='50'  r='3' />
          <path d='M47.5,47.5 L52.5, 52.5 M52.5,47.5 L47.5, 52.5' />
        </g>

        <g id='center'>
          <circle cx='50' cy='50' r='5' />
        </g>

        <g id='lines'>
          <use href='#line' />
          <text id='mark' className='grid-line__mark' x="47" y="10" transform='rotate(-45)'  transform-origin='center'>45°</text>

          <use href='#line' transform='translate(0,50)' />
          <text id='mark' className='grid-line__mark' x="47" y="10" transform='rotate(45)'  transform-origin='center'>45°</text>

          <use href='#line' transform='rotate(90)' transform-origin='center' />
          <text id='mark' className='grid-line__mark' x="47" y="10" transform='rotate(135)'  transform-origin='center'>45°</text>

          <use href='#line' transform='rotate(90) translate(0,50)' transform-origin='center' />
          <text id='mark' className='grid-line__mark' x="47" y="10" transform='rotate(-135)'  transform-origin='center'>45°</text>
        </g>
      </svg>
  )
}

export default Grid