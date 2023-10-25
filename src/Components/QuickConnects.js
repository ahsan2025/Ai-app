import {React,useState} from 'react'
import { Connect, NumberPad,WConnect,NumberPadW,USA } from '../Imports/ImportImages'
import LeftPanelButtons from './LeftPanelButtons';
import TabTitle from './TabTitle';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function QuickConnects(props) {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div style={{height:'100%'}} className='quick-connect'>
        <div style={{height:'calc(100% - 115px)',overflow:'auto', display:'flex',flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <TabTitle heading='Quick Connects'/>
                <label className='phone-num'>Phone number</label>
                <Box className='form-group'>
                    <FormControl fullWidth>
                        <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem className='select' value="">
                          <em style={{display:'flex',fontStyle:'normal'}}><img src={USA} alt='usa1'/> Enter quick connects or number</em>
                        </MenuItem>
                        <MenuItem className='select' value={10}><img src={USA} alt='usa2'/> Enter quick connects or number</MenuItem>
                        <MenuItem className='select' value={20}><img src={USA} alt='usa3'/> Enter quick connects or number</MenuItem>
                        <MenuItem className='select' value={30}><img src={USA} alt='usa4'/> Enter quick connects or number</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
            </div>
            <div className='bottom-area'>
                <LeftPanelButtons onClickBtn1={()=>props.onClick(3)} onClickBtn2={()=>props.onClick(4)} hoverImg2={NumberPadW} hoverImg={WConnect} img={Connect} img2={NumberPad} b1='Number Pad' b2='Call'/>
            </div>
        </div>
    </div>
  )
}

export default QuickConnects