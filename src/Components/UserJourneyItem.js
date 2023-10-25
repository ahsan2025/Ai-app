import React from 'react'
import { VerticalLine } from '../Imports/ImportImages';

function UserJourneyItem(props) {
  return (
    <div className='journey-item'>
        {props.Vline ? <img src={VerticalLine} alt='vertical' style={{marginBottom : '5px'}}/> : null}
        <h5>{props.name}</h5>
        <div style={{display:'flex',alignItems:'center'}}>
            <img src={props.img} alt="img-here"/>
            <div className='line'>
                {props.line ? <img src={props.line} alt='img-here2'/> : null}
            </div>
        </div>
        {props.des  ? <span>{props.des}</span> : null}
        
    </div>
  )
}

export default UserJourneyItem