import React, { useContext } from 'react'
import { DisplayContext } from '../hooks/displayContext';
import Grid from './grid'
import Measure from './measure'
import Rapporteur from './rapporteur';
import '../styles/level.css'

const Level = ({orientation}) => {
  const ctx = useContext(DisplayContext)

  return (
    <div className='level'>
      {ctx.display === 'rapporteur' ? 
        <Rapporteur orientation={orientation} />
        :
        <Grid orientation={orientation} />
      }
      <Measure type={'horizontal'} orientation={orientation} mode={ctx.display} />
      <Measure type={'vertical'} orientation={orientation} mode={ctx.display} />
      {/* <Measure type={'vertical'} orientation={orient} />
      <Measure type={'flat'} orientation={orient} /> */}
    </div>
  )
}

export default Level