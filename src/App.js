import './App.css';

import DrumMachine from './components/DrumMachine';
import Drumcontrols from './components/Drumcontrols';
function App() {
  return (
    <div id="drum-machine" className="drum_machine">
      <DrumMachine />
      <Drumcontrols />
    </div>
  );
}

export default App;
