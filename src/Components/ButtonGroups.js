import {React,useState} from 'react'
import { Video,ScreenShare,VideoScreen,OnCalling,SharePicture,Computer,ScreenStart,VideoShareIcon,MicIcon,SettingIcon, EndCall } from '../Imports/ImportImages'
import ModalBox from './Modal/ModalBox';

function ButtonGroups() {
  const [modalOpen,setModalOpen] = useState(false);
  const [popupValue, setPopupValue] = useState('')

  const OpenModalBox = (val) => {
    setPopupValue(val)
    setModalOpen(true)
  }

  const CloseModelBox = () => {
    setPopupValue('')
    setModalOpen(false)
  }

  return (
    <div className='button-groups'>
        <button onClick={()=>OpenModalBox('videoCall')}>
            <img src={Video} alt='call'/>
            Video Call
        </button>
        <button onClick={()=>OpenModalBox('screenShare')}>
          <img src={ScreenShare} alt='screenshare'/>
          Screenshare
        </button>

        {modalOpen && popupValue === 'videoCall' ? <ModalBox isHeight CloseModal={() => setModalOpen(false)} isOpen={modalOpen}>
          <div className='video-screenpicture'>
            <img src={VideoScreen} alt='videoscreen' height={'100%'}/>
            <div className='oncall'>
              <img src={OnCalling} alt='oncall'/>
            </div>
            <div className='videoscreen-btns'>
              <button><img src={ScreenStart} alt='screen-start'/></button>
              <button><img src={VideoShareIcon} alt='video-shareicon'/></button>
              <button onClick={CloseModelBox} className='endcallbtn'><img src={EndCall} alt='endcall'/></button>
              <button><img src={MicIcon} alt='micicon'/></button>
              <button><img src={SettingIcon} alt='settingicon'/></button>
            </div>
          </div>
        </ModalBox> : null}

        {modalOpen && popupValue === 'screenShare' ? <ModalBox isHeight CloseModal={() => setModalOpen(false)} isOpen={modalOpen}>
          <div className='video-screenpicture'>
            <img src={SharePicture} alt='sharepicture' height={'100%'}/>
            <div className='oncall'>
              <img src={OnCalling} alt='oncall'/>
            </div>
            <div className='videoscreen-btns'>
              <button><img src={ScreenStart} alt='screen-start'/></button>
              <button><img src={VideoShareIcon} alt='video-shareicon'/></button>
              <button onClick={CloseModelBox} className='endcallbtn'><img src={EndCall} alt='endcall'/></button>
              <button><img src={MicIcon} alt='micicon'/></button>
              <button><img src={SettingIcon} alt='settingicon'/></button>
            </div>
            <button onClick={CloseModelBox} className='sharescrrenbtn'>
              <img style={{paddingRight:'5px'}} src={Computer} alt='computer'/>
              Stop Screenshare
            </button>
          </div>
        </ModalBox> : null}

    </div>
  )
}

export default ButtonGroups