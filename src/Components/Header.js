import React from 'react'
import { Logo,Settings } from '../Imports/ImportImages'

function Header() {
  return (
    <header>
        <div className='header-wrapper'>
            <div className='logo'>
                <img src={Logo} alt='header-logo'/>
            </div>
            <div className='admin-panel'>
                <div className='available'>
                    <span>Available</span>
                </div>
                <div className='name'>
                    <span>Alexandar Paul</span>
                </div>
                <div className='settings'>
                    <img src={Settings} alt='setting-img'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header