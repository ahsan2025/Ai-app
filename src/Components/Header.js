import {React,useState} from 'react'
import { Logo,Settings } from '../Imports/ImportImages'
import ModalBox from './Modal/ModalBox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Downloadd} from '../Imports/ImportImages'

function Header() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [modalOpen,setModalOpen] = useState(false);

    const OpenModalBox = () => {
      setModalOpen(true)
    }
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
                <div className='settings' onClick={OpenModalBox}>
                    <img src={Settings} alt='setting-img'/>
                </div>
            </div>
        </div>
        <ModalBox CloseModal={() => setModalOpen(false)} isOpen={modalOpen}>
        <div className='modal-body'>
            <h4>Audio Device</h4>
            <div>
            <label style={{display:'block'}}>Speaker</label>   
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
            <label style={{display:'block'}}>Microphone</label>   
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
            <label style={{display:'block'}}>Ringer</label>   
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
            <div className='phone-type'>
            <label style={{display:'block'}}>Phone Type</label>
            <ul>
                <li className='radio-button'>
                <input type='radio' name='type' id='radio1'/>
                <label for='radio1' className='mylabel'>
                Softphone
                </label>
                </li>
                <li className='radio-button radio2'>
                <input type='radio' name='type' id='radio2'/>
                <label for='radio2' className='mylabel'>
                Deskphone
                <div className='click-active'>
                    <input type='number' placeholder='1234567890' className='input-field'/>
                </div>
                </label>
               
                </li>
            </ul>
            </div>
            <label style={{display:'block'}}>Ringer</label>   
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
            <div className='bottom-area'>
                <span style={{display:'flex',alignItems:'center',padding:'0'}}> 
                    <img style={{marginRight:'5px'}} src={Downloadd} alt='download-icon'/>
                Downlaod Log
                </span>
                <div className='buttons-area'>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
            </div>
        </div>
        </ModalBox>
        </header>
  )
}

export default Header