import { useState } from 'react';
import './App.css';
import { Modal, ModalProvider } from './components/modal'
import Level from './components/level'
import Menu from './components/menu'
import useOrientation from './hooks/useOrientation';

function App() {
  const orientation = useOrientation()
  const [modalOpen , setModalOpen] = useState(true)

  return (
    <ModalProvider className="App">
      {
        modalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <p>Welcome to </p>
            <h1>Javascript Level</h1>
            <div></div>
          </Modal>
        )
      }

      <Level orientation={orientation.values} />
      <Menu orientation={orientation.values} calibrate={orientation.calibrate} offset={orientation.offset} />
    </ModalProvider>
  );
}

export default App;
