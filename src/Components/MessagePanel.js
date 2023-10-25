import React from 'react'
// import { MessageTabImg } from '../Imports/ImportImages'
// import TabTitle from './TabTitle'
import { messageData } from '../resource/localData'
import { Send,MingCute,ContactMes,EndChat } from '../Imports/ImportImages'

function MessagePanel() {
  return (
    <div style={{height:'100%',display:'flex',justifyContent:'center',width:'100%'}}>
        {/* <div style={{display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
            <div className='picture' style={{marginBottom:'40px'}}>
            <img src={MessageTabImg} alt='alex'/>
            </div>
            <TabTitle heading='Welcome Jane'/>
            <span className='welcome' style={{paddingTop:'0'}}>You have 0 open chats.</span>
        </div> */}
        <div className='message-panelstatus'>
            <div className='toparea'>
                <h3>Connected Chat With Alexendera Paul</h3>
                <span>03:54 PM</span>
            </div>
            <div style={{height:'450px',overflow:'auto'}}>
                {messageData.map((item) => 
                <div className='message-box'>
                    <h4>{item.title}</h4>
                    <span>{item.subTitle}</span>
                    <p>{item.description}</p>
                </div>
                )}
            </div>
            <div className='message-type' style={{marginTop:'20px'}}>
                <input type='text' placeholder='Write message here'/>
                <button><img src={Send}/></button>
            </div>
            <div className='message-bottombox'>
                <div className='mingcute'>
                    <img src={MingCute} alt='image'/>
                </div>
                <div className='mingcute'>
                    <img src={ContactMes} alt='image'/>
                </div>
                <div className='endchat'>
                    <img src={EndChat} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessagePanel