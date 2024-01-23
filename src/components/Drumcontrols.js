import React, {useContext} from 'react';
import { DrumContext } from '../DrumContext';

function Drumcontrols() { 
  const { displayText } = useContext(DrumContext);

  return (
    <div className='controls_container'>
        <div>
        <span>Power</span>
          <div className='power'>
             <button className='powerbutton'></button>
          </div>
        </div>
  
        <div className='display' id="display">
            {displayText}
        </div>
    </div>
  )
}

export default Drumcontrols
