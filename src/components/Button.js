import React, { useRef, useEffect,useState,useContext } from 'react';
import { DrumContext } from '../DrumContext';

function Button({ id, children, audioSrc, label }) {
  const { updateDisplay } = useContext(DrumContext);
  const audioRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    playAudio();
    updateDisplay(id)
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  useEffect(()=> {
   const handleKeyPress = (event) => {
    if(event.key.toUpperCase() === label){
      playAudio()

      setIsActive(true);

      // Set a timeout to remove the active state after a short delay
      setTimeout(() => {
        setIsActive(false);
      }, 100);
    }
   }

   document.addEventListener('keyup', handleKeyPress)

   return  ()=> {
    document.removeEventListener('keyup',handleKeyPress)
   }
  },[label])

  return (
    <button className={`drum-pad ${isActive ? 'active' : ''}`} id={id} onClick={handleClick}>
      {children}
      <audio className='clip' ref={audioRef} id={label} src={audioSrc}></audio>
    </button>
  );
}

export default Button;
