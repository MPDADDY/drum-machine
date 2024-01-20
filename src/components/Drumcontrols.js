import React from 'react'

function Drumcontrols() { 
  return (
    <div className='controls_container'>
        <div>
        <span>Power</span>
          <div className='power'>
             <button className='powerbutton'></button>
          </div>
        </div>
  
        <div className='display' id="display">
            display
        </div>
    </div>
  )
}

export default Drumcontrols

