import React, { useState } from 'react';
import { AdminNumarea,EndCall,Incoming } from '../Imports/ImportImages';
import TabTitle from './TabTitle';

const MyDialpad = (props) => {
  const [input, setInput] = useState('');

  const handleKeyPress = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleKeyDown = (event) => {
    if (/^[0-9*#]$/.test(event.key)) {
      handleKeyPress(event.key);
    } else if (event.key === 'Backspace') {
      handleBackspace();
    }
  };


  return (
    <div className="numpad-area" onKeyDown={handleKeyDown} tabIndex={0}>
        <div style={{display:'flex',alignItems:'flex-start'}}>
      <input type="text" value={input} readOnly />
        <button className="close-button" onClick={handleBackspace}>
          x
        </button>
        </div>
      <div className="row">
        <button onClick={() => handleKeyPress('1')}>1</button>
        <button onClick={() => handleKeyPress('2')}>2</button>
        <button onClick={() => handleKeyPress('3')}>3</button>
        <button onClick={() => handleKeyPress('4')}>4</button>
        <button onClick={() => handleKeyPress('5')}>5</button>
        <button onClick={() => handleKeyPress('6')}>6</button>
        <button onClick={() => handleKeyPress('7')}>7</button>
        <button onClick={() => handleKeyPress('8')}>8</button>
        <button onClick={() => handleKeyPress('9')}>9</button>
        <button onClick={() => handleKeyPress('*')}>*</button>
        <button onClick={() => handleKeyPress('0')}>0</button>
        <button onClick={() => handleKeyPress('#')}>#</button>
        <button onClick={() => handleKeyPress('')}><span><img src={AdminNumarea}/></span></button>
        <button onClick={props.onClick}><span className='endcall'><img src={EndCall}/></span></button>
        <button onClick={() => handleKeyPress('')}><span><img src={Incoming}/></span></button>
      </div>
    </div>
  );
};

export default MyDialpad;





