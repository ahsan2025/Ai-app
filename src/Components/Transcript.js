import React from 'react'
import TitleSm from './TitleSm';
import { transcriptData } from '../resource/localData';

function Transcript() {
  return (
    <div className='transcript-area'>
        <TitleSm name='Transcript'/>
            {transcriptData.map((item,index) => 
              <div className='transcript-box' key={index}>
                <h4>{item.title}</h4>
                <span>{item.subTitle}</span>
                <p>{item.description}</p>
              </div>
            )}
    </div>
  )
}

export default Transcript