import { useState } from 'react';
import './styles/app.css';
import { Modal, ModalProvider } from './components/modal'
import Level from './components/level'
import Menu from './components/menu'
import useOrientation from './hooks/useOrientation';

function App() {
  const orientation = useOrientation()
  const [modalOpen , setModalOpen] = useState(true)

  const orientationSupport = window.DeviceOrientationEvent && 'ontouchstart' in window
  console.log(orientationSupport)
  return (
    <ModalProvider className="App">
      {
        modalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h1 className='app-header'>
              <span className='app-header__prefix'>Welcome to</span><br/>
              Javascript Level App
            </h1>
            <div className='app'>
              This application requires access to sensors tracking orientation and movement of your device, make sure consent is granted. Additionally browsers might handle device orientation differently, if you encounter any bugs or unexpected behaviour feel free to <a className='app-link' href="mailto:jacekwalasik89@gmail.com">Contact Me</a> - (providing issue description, browser and device info will help greatly).
            </div>
            <div className='app-status'>Device status:    {orientationSupport 
                ? <span className='app-status__ok'> Orientation supported</span> 
                : <span className='app-status__warn'> Orientation not supported</span>}
            </div>
          </Modal>
        )
      }

      <Level orientation={orientation.values} />
      <Menu orientation={orientation.values} calibrate={orientation.calibrate} offset={orientation.offset} />
      <footer className='app-footer'>Designed and coded by <a className='app-link' href='https://github.com/elPaleniozord'>jWalasik</a></footer>
    </ModalProvider>
  );
}

export default App;
