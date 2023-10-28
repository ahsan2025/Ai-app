import React from 'react'
import { Cancel } from '../../Imports/ImportImages'

function ModalBox(props) {
  return (
    <>
    <div className={`modal ${props.isOpen ? 'modal-active' : null}`}>
        <div className='toparea'>
            <h2>{props.title}</h2>
            <button className='closepopupbtn' onClick={props.CloseModal}>
                <img src={Cancel} alt='cancel'/>
            </button>
        </div>
       {props.children}
    </div>
     <div className='blocker' onClick={props.CloseModal}></div>
     </>
  )
}

export default ModalBox