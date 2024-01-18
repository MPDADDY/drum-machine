import React, { useRef, useEffect,useState } from 'react';

function Button({ id, children, audioSrc, label }) {
  const audioRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    playAudio();
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
  },[])

  return (
    <button className={`drum-pad ${isActive ? 'active' : ''}`} id={id} onClick={handleClick}>
      {children}
      <audio className='clip' ref={audioRef} id={label} src={audioSrc}></audio>
    </button>
  );
}

export default Button;
