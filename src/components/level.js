import React from 'react'
import useOrientation from '../hooks/useOrientation'
import Grid from './grid'
import Measure from './measure'

const Level = () => {
  const orient = useOrientation()
  return (
    <div>
      <Grid orientation={orient} />
      <Measure orientation={orient} />
      <div className='display'>
        <div>Horizontal alignment: {orient.y}</div>
        <div>Vertical alignment: {orient.z}</div>
      </div>
    </div>
  )
}

export default Level