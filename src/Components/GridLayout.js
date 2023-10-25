import React from 'react'
import Chart from './Chart';
import Transcript from './Transcript';

function GridLayout() {
  return (
    <div className='grid-d-bottom'>
        <Chart/>
        <Transcript/>
    </div>
  )
}

export default GridLayout