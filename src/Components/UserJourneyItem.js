import React from 'react'
import { VerticalLine } from '../Imports/ImportImages';

function UserJourneyItem(props) {
  return (
    <div className='journey-item'>
        {props.Vline ? <img src={VerticalLine} style={{marginBottom : '5px'}}/> : null}
        <h5>{props.name}</h5>
        <div style={{display:'flex',alignItems:'center'}}>
            <img src={props.img} alt="image here"/>
            <div className='line'>
                {props.line ? <img src={props.line} alt='image here'/> : null}
            </div>
        </div>
        {props.des  ? <span>{props.des}</span> : null}
        
    </div>
  )
}

export default UserJourneyItem