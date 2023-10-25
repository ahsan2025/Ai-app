import React from 'react'
import Search from './Search'
import SearchResults from './SearchResults'
import StepWise from './StepWise'
import ButtonGroups from './ButtonGroups'
import UserJourney from './UserJourney'

function RightPanel() {
  return (
    <div className='right-panel'>
        <Search/>
        <SearchResults/>
        <StepWise/>
        <ButtonGroups/>
        <UserJourney/>
    </div>
  )
}

export default RightPanel