import React from 'react'
import { Cancel } from '../../Imports/ImportImages'

function ModalBox(props) {
  return (
    <>
    <div className={`modal ${props.isOpen ? 'modal-active' : null} ${props.isHeight ? 'box-height' : ''}`}>
       {props.Header === true ?
        <div className='toparea'>
            <div>
              <h2>{props.title}</h2>
              {props.des ? 
              <p>{props.des}</p>  
              : null
              }
            </div>
            <button className='closepopupbtn' onClick={props.CloseModal}>
                <img src={Cancel} alt='cancel'/>
            </button>
        </div>
        : null
        }
       {props.children}
    </div>
     <div className='blocker' onClick={props.CloseModal}></div>
     </>
  )
}

export default ModalBox;