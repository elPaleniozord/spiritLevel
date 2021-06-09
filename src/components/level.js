import React from 'react'
import useOrientation from '../hooks/useOrientation'
import Grid from './grid'
import Measure from './measure'

const Level = () => {
  const orient = useOrientation()
  return (
    <div>
      <Grid orientation={orient} />
      <Measure type={'horizontal'} orientation={orient} />
      <Measure type={'vertical'} orientation={orient} />
      {/* <Measure type={'vertical'} orientation={orient} />
      <Measure type={'flat'} orientation={orient} /> */}
    </div>
  )
}

export default Level