import React, {useContext, useState} from 'react'
import { DisplayContext } from '../hooks/displayContext'
import '../styles/menu.css'

const Menu = ({orientation, calibrate, offset}) => {
  const [collapsed, setCollapsed] = useState(true)
  const displayCtx = useContext(DisplayContext)

  const changeMode = () => {
    const newValue = displayCtx.display === 'rapporteur' ? 'grid' : 'rapporteur'
    displayCtx.setDisplay(newValue)
  }

  return (
    <nav className={`menu ${collapsed && 'menu__collapsed'}`}>
      {!collapsed &&
        <ul className={'menu-description'}>
          {window.orientation ? 
            <li style={{color: 'rgb(70, 255, 0)'}}>Orientation Supported</li> 
            : 
            <li style={{color: 'rgb(255, 70, 0)'}}>No Orientation Support</li>
          }
          <li>Alpha: {orientation.alpha}</li>
          <li>Beta: {orientation.beta}</li>
          <li>Gamma: {orientation.gamma}</li>
          <li>Base Alpha: {orientation.baseAlpha}</li>
          <li>Base Beta: {orientation.baseBeta}</li>
          <li>Base Gamma: {orientation.baseGamma}</li>
        </ul>
      }
 
      <button className={`menu-button ${collapsed ? 'menu-button__closed' : 'menu-button__open'}`} onClick={(e)=>setCollapsed(!collapsed)}>
        <svg viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>

      <button className={`menu-button ${collapsed ? 'menu-button__hidden' : 'left'}`} onClick={calibrate}>
        {offset ? 'Reset' : 'Zero'}
      </button>

      <button className={`menu-button ${collapsed ? 'menu-button__hidden' : 'right'}`} onClick={changeMode}>Mode</button>
    </nav>
  )
}

export default Menu