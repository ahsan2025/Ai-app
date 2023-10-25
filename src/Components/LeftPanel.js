import {React, useState} from 'react'
import PanelArea from './PanelArea'

function LeftPanel() {
  const [active, isActive] = useState(0);
  const [isMyActive, setIsMyActive] = useState('left-tabs');

  const changeStylesFunc = (e) => {
    if(e === 'call'){setIsMyActive('left-tabs')}
    else{setIsMyActive('left-tabs active')}
    isActive(0)
  }

  return (
    <div style={{background : active === 0 ? 'var(--white)': 'var(--primary2)'}} className={isMyActive}>
      <PanelArea changeStyles={(e)=>changeStylesFunc(e)} parentActivator={(value)=> isActive(value)} className='mydiv'/>
    </div>
  )
}

export default LeftPanel