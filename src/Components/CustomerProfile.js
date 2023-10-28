import React from 'react'
import Title from './Title'
import { Name,ProfileId,AccountNo,PhoneNo,DOB,Gender,Email,Address } from '../Imports/ImportImages'
import { personalData } from '../resource/localData'

import ProfileBox from './ProfileBox'

function CustomerProfile(props) {

  return (
    <div className='customprofile' >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Title name='Customer Profile'/>
              <button className='plusbutton'>
              +
              </button>
        </div>
          <div className='grid-profile'>
            <ProfileBox title="Full Name" img={Name} item={personalData.fullName}/>
            <ProfileBox title="Profile ID" img={ProfileId} item={personalData.profileId}/>
            <ProfileBox title="Account Number" img={AccountNo} item={personalData.accoutNo}/>
            <ProfileBox title="Phone Number" img={PhoneNo} item={personalData.phoneNo}/>
            <ProfileBox title="Date Of Birth" img={DOB} item={personalData.DOB}/>
            <ProfileBox title="Gender" img={Gender} item={personalData.gender}/>
            <ProfileBox title="Email Address" img={Email} item={personalData.emailAddress}/>
            <ProfileBox title="Address" img={Address} item={personalData.address}/>
          </div>
    </div>
  )
}

export default CustomerProfile