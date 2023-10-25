import {React,useState} from 'react'
import TitleSm from './TitleSm'
import { StepWiseImg } from '../Imports/ImportImages'

function StepWise(props) {
  const [openStyles,setOpenStyles] = useState(0);

  const openBox = (val) => {
    setOpenStyles(val)
  }

  return (
    <div>
        <div className='steps' onClick={props.onClickBtnn}>
          <img src={StepWiseImg} alt='stepimage'/>
          <TitleSm white name='Step By Step'/>
        </div>
    </div>
  )
}

export default StepWise