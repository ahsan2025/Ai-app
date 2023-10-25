import React from 'react'

function ProfileBox(props) {
  return (
    <div>
        <div className='picturediv'>
            <img src={props.img} alt='name'/>
        </div>
        <div>
            <label>{props.title}</label>
            <span>{props.item}</span>
        </div>
    </div>
  )
}

export default ProfileBox