import { ReactComponent as RapSVG} from '../assets/rapporteur.svg'
import '../styles/rapporteur.css'

const Rapporteur = ({orientation}) => {
  const angle = orientation.beta * 100 / 90;

  return (
    <div className='rapporteur-container'>
      <RapSVG className='rapporteur-svg' transform={`rotate(${angle})`}/>
      <svg viewBox='0 0 100 100' className='rapporteur-crosshair' >
        <path d='M10,50 L90,50 M50,20 L50,80' vectorEffect='non-scaling-stroke' />
      </svg>
      <div className='rapporteur-display' transform={`rotate(${angle})`}>{angle.toFixed(2)}°</div>
    </div>

  )
}

export default Rapporteur