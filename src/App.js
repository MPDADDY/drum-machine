import './App.css';
import DrumMachine from './components/DrumMachine';
import {DrumContextProvider} from './DrumContext'
import Drumcontrols from './components/Drumcontrols';
function App() {
  return (
    <div id="drum-machine" className="drum_machine">
      <DrumContextProvider>
         <DrumMachine />
         <Drumcontrols />
      </DrumContextProvider>
    </div>
  );
}

export default App; 
