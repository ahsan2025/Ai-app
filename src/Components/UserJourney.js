import React from 'react'
import Title from './Title';
import UserJourneyItem from './UserJourneyItem';
import { Agent, Person,Line,BigLine } from '../Imports/ImportImages';

function UserJourney() {
  return (
    <div className='user-journey'>
        <Title name='User Journey Visualization'/>
        <div className='grid-journey'>
            <UserJourneyItem name='customer' liness line={Line} img={Person} des='Banking Account'/>
            <UserJourneyItem name='customer' liness line={Line} img={Person} des='Statement related queries'/>
            <UserJourneyItem name='customer' img={Person} des='account number'/>
            <UserJourneyItem line={BigLine} img={Agent}/>
            <UserJourneyItem name='customer' Vline img={Person} des='78569392'/>
        </div>
    </div>
  )
}

export default UserJourney