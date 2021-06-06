import './App.css';
import Modal from './components/modal'
import Level from './components/level'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poziomica</h1>
        <span>Cyfrowa poziomica w twoim telefonie</span>
      </header>

      <Level />

      <Modal />
    </div>
  );
}

export default App;
