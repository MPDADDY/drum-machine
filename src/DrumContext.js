import React, { useState } from 'react';

const DrumContext = React.createContext();
const DrumProvider = DrumContext.Provider;
const DrumConsumer = DrumContext.Consumer;

const DrumContextProvider = ({children}) => {
   const [displayText, setDisplayText] = useState()
   const [powerOn, setPowerOn] = useState(true)

   const updateDisplay = (text) => {
      setDisplayText(text)
   }

   const togglePower = () => {
      setPowerOn((prevPower) => !prevPower)
   }

   return (
    <DrumProvider value={{ displayText, updateDisplay, powerOn, togglePower }}>
      {children}
    </DrumProvider>
  );
}

export { DrumContextProvider, DrumConsumer, DrumContext };
