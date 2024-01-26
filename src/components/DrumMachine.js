import React from 'react';
import Button from './Button';

import Dsc_Oh from './audios/Dsc_Oh.mp3'
import Heater_1 from './audios/Heater_1.mp3'
import Heater_2 from './audios/Heater_2.mp3'
import Heater_3 from './audios/Heater_3.mp3'
import Heater_4_1 from './audios/Heater_4_1.mp3'
import Heater_6 from './audios/Heater_6.mp3'
import Kick_n_Hat from './audios/Kick_n_Hat.mp3'
import RP4_KICK_ from './audios/RP4_KICK_.mp3'
import RP4_KICK_1 from './audios/RP4_KICK_1.mp3'

export default function DrumMachine() {

  const buttons = [
    { id: 'Dsc_Oh', audioSrc: Dsc_Oh, label: 'Q' },
    { id: 'Heater_1', audioSrc: Heater_1, label: 'W' },
    { id: 'Heater_2', audioSrc: Heater_2, label: 'E' },
    { id: 'Heater_3', audioSrc: Heater_3, label: 'A' },
    { id: 'Heater_4_1', audioSrc: Heater_4_1, label: 'S' },
    { id: 'Heater_6', audioSrc: Heater_6, label: 'D' },
    { id: 'Kick_n_Hat', audioSrc: Kick_n_Hat, label: 'Z' },
    { id: 'RP4_KICK_', audioSrc: RP4_KICK_, label: 'X' },
    { id: 'RP4_KICK_1', audioSrc: RP4_KICK_1, label: 'C' },
  ];

  return   (
    <div className='drum_container'>
      {
        buttons.map((button)=> (
        <Button key={button.id} id={button.id} label={button.label} audioSrc={button.audioSrc}>
          {button.label}
        </Button>
        ))
        }
    </div>
  )
}
