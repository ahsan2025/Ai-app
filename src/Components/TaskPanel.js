import {React,useState} from 'react'
import { Calender,Clock,TaskPerson} from '../Imports/ImportImages'
import { taskData } from '../resource/localData'
import ModalBox from './Modal/ModalBox';
import FormFields from './FormFields';

function TaskPanel(props) {
    const [modalOpen,setModalOpen] = useState(false);

    const OpenModalBox = () => {
      setModalOpen(true)
    }
  return (
    <>
    <div style={{height:'100%',display:'flex',justifyContent:'center',width:'100%'}}>
    {/* <div style={{display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
        <div className='picture' style={{marginBottom:'40px'}}>
        <img src={TaskTabImg} alt='alex'/>
        </div>
        <TabTitle heading='Welcome Jane'/>
        <span className='welcome' style={{paddingTop:'0'}}>You have 0 open task.</span>
        <button style={{padding:'15px 40px',borderRadius:'10px',marginTop:'40px',background:'#25CB88',border:'none',color:'white',display:'flex',alignItems:'center'}}><img style={{marginRight:'10px'}} src={AddTaskImg}/>Create Task</button>
    </div> */}
    <div className='message-panelstatus task-panelstatus'>
        <div>
            {taskData.map((item,index) => 
            <div className='message-box task-box' key={index}>
                <h4 style={{fontSize:'19px'}}>{item.title}</h4>
                <span><img src={Calender} alt='calender'/>{item.date}</span>
                <span><img src={Clock} alt='clock'/>{item.time}</span>
                <p>{item.description}</p>
                <span className='task-user' style={{color:'var(--white)'}}><img src={TaskPerson} alt='taskperson'/>{item.user}</span>
            </div>
            )}
            <div className='add-task' onClick={OpenModalBox}>
                +
            </div>
        </div>
    </div>
    </div>
    <ModalBox isHeight Header={true} des='Follow simple steps to create your profile' CloseModal={() => setModalOpen(false)} title='Create Task' isOpen={modalOpen}>
      <div className='profileform-body'>
      <div className='header'>
        
      </div>
      <div className='profile-form'>
          <div>
          <FormFields width='33.33%' label='Task name' type='text' placeholder='Enter task name'/>
          <FormFields width='33.33%' calender label='Select Date' type='text'/>
          <FormFields width='33.33%' time label='Select Time' type='number' placeholder='Enter your mobile Number'/>
          <FormFields width='50%' label='Refrences' dropdown/>
          <FormFields width='50%' dropdown label='Assign to'/>
          </div>
          <div>
          <FormFields width='100%' type='text' widthfull label='Description' placeholder='Write brief description'/>
          </div>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',background:'var(--white)',padding:'10px'}}>
        <button className='profileform-submit'>DONE</button>
      </div>
    </ModalBox>
    </>
  )
}

export default TaskPanel