import React, { useState } from 'react';

const DrumContext = React.createContext();
const DrumProvider = DrumContext.Provider;
const DrumConsumer = DrumContext.Consumer;

const DrumContextProvider = ({children}) => {
   const [displayText, setDisplayText] = useState()

   const updateDisplay = (text) => {
      setDisplayText(text)
   }

   return (
    <DrumProvider value={{ displayText, updateDisplay }}>
      {children}
    </DrumProvider>
  );
}

export { DrumContextProvider, DrumConsumer, DrumContext };