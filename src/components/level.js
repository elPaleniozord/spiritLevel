import React from 'react'
import useOrientation from '../hooks/useOrientation'
import Grid from './grid'
import Measure from './measure'

const Level = ({orientation}) => {

  return (
    <div>
      <Grid orientation={orientation} />
      <Measure type={'horizontal'} orientation={orientation} />
      <Measure type={'vertical'} orientation={orientation} />
      {/* <Measure type={'vertical'} orientation={orient} />
      <Measure type={'flat'} orientation={orient} /> */}
    </div>
  )
}

export default Level