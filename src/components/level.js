import React from 'react'
import Grid from './grid'
import Measure from './measure'
import Rapporteur from './rapporteur';

const Level = ({orientation}) => {

  return (
    <div>
      {/* <Grid orientation={orientation} /> */}
      <Rapporteur orientation={orientation} />
      <Measure type={'horizontal'} orientation={orientation} />
      <Measure type={'vertical'} orientation={orientation} />
      {/* <Measure type={'vertical'} orientation={orient} />
      <Measure type={'flat'} orientation={orient} /> */}
    </div>
  )
}

export default Level