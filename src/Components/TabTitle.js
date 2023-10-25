import React from 'react'

function TabTitle(props) {
  return (
    <div>
        <h2 style={{color: props.white ? "var(--white)" : 'auto'}}>{props.heading}</h2>
    </div>
  )
}

export default TabTitle