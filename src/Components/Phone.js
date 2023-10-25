import React,{useState} from 'react'
import {Alexander } from '../Imports/ImportImages';
import LeftPanelButtons from './LeftPanelButtons';
import TabTitle from './TabTitle';
import { Connect, NumberPad,WConnect,NumberPadW,CallUser} from '../Imports/ImportImages'
import QuickConnects from './QuickConnects';
import MyDialpad from '../Components/MyDialpad'
import CallOptions from './CallOptions';

function Phone(props) {
    const [active, setActive] = useState(0)

    const changeTabs = (val) => {
      console.log(val)
        setActive(val)
        props.activator(val)
    }

    // 0 = welcome
    // 1 = quick connect
    // 2 = dialpad
    // 3 = 


  return (
        <>
        {active === 0 ? 
        <>
             <div style={{height:'calc(100% - 115px)',overflow:'auto', display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
             <div className='picture'>
               <img src={Alexander} alt='alex'/>
             </div>
             <span className='welcome'>Welcome</span>
             <TabTitle heading='Alexendar Paul'/>
           </div>
         <div className='bottom-area'>
           <LeftPanelButtons onClickBtn1={()=>changeTabs(1)} onClickBtn2={()=>changeTabs(2)} hoverImg2={NumberPadW} hoverImg={WConnect} img={Connect} img2={NumberPad} b1='Quick Connects' b2='Number Pad'/>
         </div>
         </>
         : null}

        {active === 1 ? 
              <QuickConnects onClick={(value)=> changeTabs(value)}/>
         : null}

        {active === 2 ? 
              <>
            
            <MyDialpad onClick={() => changeTabs(4)}/>
        </>
         : null}
       {active === 3 ? 
        <>
            <MyDialpad onClick={() => changeTabs(4)}/>
        </>
        : null
       }
       {active === 4 ? 
        <>
        <div style={{height:'calc(100% - 135px)',overflow:'auto', display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}} className='numberpad'>
              <div className='number'>
              +420 123 456 789
              </div>
              <div className='duration'>
              00:08:30
              </div>
              <div className='picture'>
                <img src={CallUser} style={{padding:'20px 0'}} alt='alex'/>
              </div>
              <TabTitle white heading='Alexendar Paul'/>
              <CallOptions onClick={() => changeTabs(0)}/>
            </div>
            <div className='bottom-area'>
              <LeftPanelButtons onClickBtn1={()=>changeTabs(1)} hoverImg2={NumberPadW} hoverImg={WConnect} img={Connect} img2={NumberPad} b1='Quick Connects' b2='Create Task'/>
            </div> 
        </>
        : null
       }
        </>
        
  )
}

export default Phone