import React from 'react'
import {Mute,Hold,Keypad,CallAdmin,CallTransfer,EndCall } from '../Imports/ImportImages'

function CallOptions(props) {
  return (
    <div style={{width:'100%'}}>
        <div className='call-options'>
            <div className='round-box'>
                <button className='round'>
                    <img src={Mute} alt='image'/>
                </button>
                <span>Mute</span>
            </div>
            <div className='round-box'>
                <button className='round'>
                    <img src={Hold} alt='image'/>
                </button>
                <span>Hold</span>
            </div>
            <div className='round-box'>
                <button className='round'>
                    <img src={Keypad} alt='image'/>
                </button>
                <span>Keypad</span>
            </div>
            <div className='round-box'>
                <button className='round'>
                    <img src={CallAdmin} alt='image'/>
                </button>
                <span>Add to call</span>
            </div>
            <div className='round-box' style={{alignSelf:'center'}}>
                <button onClick={props.onClick} className='round' style={{background:'#D92C2C',alignSelf:'center',height:'75px',width:'75px'}}>
                    <img src={EndCall} alt='image'/>
                </button>
            </div>
            <div className='round-box'>
                <button className='round'>
                    <img src={CallTransfer} alt='image'/>
                </button>
                <span>Call Transfer</span>
            </div>
        </div>
    </div>
  )
}

export default CallOptions