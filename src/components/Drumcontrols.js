import React, {useContext, useState} from 'react';
import { DrumContext } from '../DrumContext';

function Drumcontrols() { 
  const { displayText } = useContext(DrumContext);
  const [ powerOn, setPowerOn ] = useState(true); 

  const handlePowerClick = () => {
    const power = document.getElementById('power')
    setPowerOn(!powerOn)
    power.style.float = powerOn ? 'right' : 'left';
  }

  return (
    <div className='controls_container'>
        <div>
        <span>{!powerOn ? 'Power off': 'Power on'}</span>
          <div className='power'>
             <button onClick={handlePowerClick} className='powerbutton' id='power'></button>
          </div>
        </div>
  
        <div className='display' id="display">
            {!powerOn ? displayText : ''}
        </div>
    </div>
  )
}

export default Drumcontrols
