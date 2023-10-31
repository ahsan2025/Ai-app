import {React,useState} from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';
import Select from '@mui/material/Select';

function FormFields(props) {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  return (
    <>

    <div className='form-group' style={{width: props.width}}>
        <label id=''>{props.label}</label>
        {props.dropdown ? 
            <Box className='form-group'>
                <FormControl fullWidth>
                    <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem className='select' value="">
                        <em style={{display:'flex',fontStyle:'normal'}}>Select</em>
                    </MenuItem>
                    <MenuItem className='select' value={10}>+1 123 456 7890</MenuItem>
                    <MenuItem className='select' value={20}>+1 123 456 7890</MenuItem>
                    <MenuItem className='select' value={30}>+1 123 456 7890</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            : props.calender ? 
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                    <DatePicker defaultValue={dayjs('select')}/>
                    </DemoContainer>
                </LocalizationProvider>
            : <input type={props.type} placeholder={props.placeholder}/>
        }
        
    </div>
    </>
  )
}

export default FormFields