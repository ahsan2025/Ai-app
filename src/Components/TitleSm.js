import React from 'react'

function TitleSm(props) {
  return (
    <div className='titlesm'>
        <h3 style={{color: props.white ? 'var(--white)' : 'var(--primary2)'}}>{props.name}</h3>
    </div>
  )
}

export default TitleSm