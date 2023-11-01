import {React,useState} from 'react'
import ModalBox from './Modal/ModalBox'
import Title from './Title'
import { Name,ProfileId,AccountNo,PhoneNo,DOB,Gender,Email,Address } from '../Imports/ImportImages'
import { personalData } from '../resource/localData'
import ProfileBox from './ProfileBox'
import FormFields from './FormFields'

function CustomerProfile(props) {

  const [modalOpen,setModalOpen] = useState(false);

  const OpenModalBox = () => {
    setModalOpen(true)
  }

  return (
    <>
    <div className='customprofile'>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Title name='Customer Profile'/>
              <button className='plusbutton' onClick={OpenModalBox}>
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
    <ModalBox isHeight Header={true} des='Follow simple steps to create your profile' CloseModal={() => setModalOpen(false)} title='Create Profile' isOpen={modalOpen}>
      <div className='profileform-body'>
      <div className='header'>
        <span>Step 1/6</span>
        <h2>Personal Detail</h2>
      </div>
      <div className='profile-form'>
          <FormFields width='33.33%' label='First Name' type='text' placeholder='Enter your first name'/>
          <FormFields width='33.33%' label='Last Name' type='text' placeholder='Enter your first name'/>
          <FormFields width='33.33%' label='Mobile number' type='number' placeholder='Enter your mobile Number'/>
          <FormFields width='33.33%' label='Gender' dropdown/>
          <FormFields width='33.33%' calender label='Date Of Birth'/>
          <FormFields width='33.33%' label='Account Number' dropdown/>
          <FormFields width='100%' type='text' widthfull label='Description' placeholder='Write brief description'/>
      </div>
      <div className='header'>
        <span>Step 1/6</span>
        <h2>Personal Detail</h2>
      </div>
      <div className='profile-form'>
          <FormFields width='33.33%' label='First Name' type='text' placeholder='Enter your first name'/>
          <FormFields width='33.33%' label='Last Name' type='text' placeholder='Enter your first name'/>
          <FormFields width='33.33%' label='Mobile number' type='number' placeholder='Enter your mobile Number'/>
          <FormFields width='33.33%' label='Gender' dropdown/>
          <FormFields width='33.33%' calender label='Date Of Birth'/>
          <FormFields width='33.33%' label='Account Number' dropdown/>
          <FormFields width='100%' widthfull label='Description'/>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',background:'var(--white)',padding:'10px'}}>
        <button className='profileform-submit'>DONE</button>
      </div>
    </ModalBox>
    </>
  )
}

export default CustomerProfile