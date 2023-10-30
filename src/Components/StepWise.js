import {React,useState} from 'react'
import TitleSm from './TitleSm'
import { StepWiseImg,StepIcon,LineStepWise } from '../Imports/ImportImages'
import ModalBox from './Modal/ModalBox';

function StepWise() {
  const [modalOpen,setModalOpen] = useState(false);

  const OpenModalBox = () => {
    setModalOpen(true)
  }

  return (
    <div>
        <div className='steps' onClick={OpenModalBox}>
          <img src={StepWiseImg} alt='stepimage'/>
          <TitleSm white name='Step By Step'/>
        </div>

        <ModalBox Header={true} CloseModal={() => setModalOpen(false)} title='Step By Step' isOpen={modalOpen}>
              <div className='stepbody'>
                <div className='stepline'>
                  <img src={LineStepWise} style={{height:'100%'}} alt='stepline'/>
                </div>
                <div className='flexarea'>
                  <div className='icon'>
                    <img src={StepIcon} alt='stepimg'/> 
                  </div>
                  <div>
                    <h4>Consectetur sit amet</h4>
                    <p>Various versions have evolved over the years. </p>
                  </div>
                </div>
                <div className='flexarea'>
                  <div className='icon'>
                    <img src={StepIcon} alt='stepimg'/> 
                  </div>
                  <div>
                    <h4>Consectetur sit amet</h4>
                    <p>Various versions have evolved over the years. </p>
                  </div>
                </div>
                <div className='flexarea'>
                  <div className='icon'>
                    <img src={StepIcon} alt='stepimg'/> 
                  </div>
                  <div>
                    <h4>Consectetur sit amet</h4>
                    <p>Various versions have evolved over the years. </p>
                  </div>
                </div>
                <div className='flexarea'>
                  <div className='icon'>
                    <img src={StepIcon} alt='stepimg'/> 
                  </div>
                  <div>
                    <h4>Consectetur sit amet</h4>
                    <p>Various versions have evolved over the years. </p>
                  </div>
                </div>
              </div>
           
        </ModalBox>
    </div>
  )
}

export default StepWise