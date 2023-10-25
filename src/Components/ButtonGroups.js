import React from 'react'
import { Video,ScreenShare } from '../Imports/ImportImages'

function ButtonGroups() {
  return (
    <div className='button-groups'>
        <button>
            <img src={Video}/>
            Video Call
        </button>
        <button>
            <img src={ScreenShare}/>
            Screenshare
        </button>
    </div>
  )
}

export default ButtonGroups