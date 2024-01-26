import React, { useRef, useEffect, useState, useContext } from 'react';
import { DrumContext } from '../DrumContext';

function Button({ id, children, audioSrc, label }) {
  const { updateDisplay, powerOn } = useContext(DrumContext);
  const audioRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  console.log(powerOn)
  const timeout = () =>  setTimeout(() => {
    setIsActive(false);
  }, 50);
  const handleClick = () => {
    if (powerOn) return;
    playAudio();
    updateDisplay(id);
    
    setIsActive(true);
   timeout();
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === label && powerOn) return;

      if (event.key.toUpperCase() === label && !powerOn) {
        playAudio();

        setIsActive(true);
        updateDisplay(id);
        timeout();
      }
    };

    document.addEventListener(powerOn ? '' : 'keyup', handleKeyPress);

    return () => {
      document.removeEventListener(powerOn ? '' : 'keyup', handleKeyPress);
    };
  }, [label, powerOn]);

  return (
    <button className={`drum-pad ${isActive ? 'active' : ''}`} id={id} onClick={handleClick}>
      {children}
      <audio className='clip' ref={audioRef} id={label} src={audioSrc}></audio>
    </button>
  );
}

export default Button;

