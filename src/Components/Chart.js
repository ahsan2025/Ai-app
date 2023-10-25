import React from 'react'
import Graph from '../assets/img/graph.png'
import Title from './Title';

function Chart() {
  return (
    <div>
        <Title name='Real Time Conversational Analytics'/>
        <img src={Graph} alt='image'/>
    </div>
  )
}

export default Chart