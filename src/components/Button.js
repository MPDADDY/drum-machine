import React, { useRef } from 'react';

function Button({ id, children, audioSrc, label }) {
  const audioRef = useRef(null);

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

  return (
    <button className='drum-pad' id={id} onClick={handleClick}>
      {children}
      <audio className='clip' ref={audioRef} id={label} src={audioSrc}></audio>
    </button>
  );
}

export default Button;
