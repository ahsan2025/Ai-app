import {React} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Call,Message,History } from '../Imports/ImportImages';
import Phone from './Phone';
import MessagePanel from './MessagePanel';
import TaskPanel from './TaskPanel';

function PanelArea(props) {

  return (
    <div style={{height: '100%'}}>  
        <Tabs>
        <TabList>
        <Tab onClick={()=> props.changeStyles('call')}><img src={Call} alt='call'/></Tab>
        <Tab onClick={()=> props.changeStyles('chat')}><img src={Message} alt='message'/></Tab>
        <Tab onClick={()=> props.changeStyles('task')}><img src={History} alt='history'/></Tab>
        </TabList>
        <div className='tabdody'>
          {/* Call Tab */}
        <TabPanel>
        <Phone activator={(val) => props.parentActivator(val)} />
        </TabPanel>
         {/* End Call Tab */}
        <TabPanel>
        <MessagePanel/>
        </TabPanel>
        <TabPanel>
        <TaskPanel/>
        </TabPanel>
        </div>
        </Tabs>
    </div>
  )
}

export default PanelArea