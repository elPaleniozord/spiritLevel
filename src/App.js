import './App.css';
import Modal from './components/modal'
import Level from './components/level'
import Menu from './components/menu'
import useOrientation from './hooks/useOrientation';

function App() {
  const orientation = useOrientation()
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Level orientation={orientation.values} />
      <Menu orientation={orientation.values} calibrate={orientation.calibrate} offset={orientation.offset} />
      <Modal />
    </div>
  );
}

export default App;
