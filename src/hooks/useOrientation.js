import {useState, useEffect} from 'react'
import debounce from '../utils/debounce'

const useOrientation = () => {
  const [coords, setCoords] = useState({alpha: 0, beta: 0, gamma: 0})

  const [offset, setOffset] = useState({alpha: 0, beta: 0, gamma: 0})

  const handleOrientationChange = (e) => {
    let alpha = e.alpha //[0, 360] range

    //add 90 degrees to simplify computation by removing negative angles
    let beta = e.beta // - offset //[-180, 180] range
    let gamma = e.gamma // - offset //[-90, 90] range

    if(isNaN(beta) || beta === null) {
      //console.log('No device orientation support')
      //handle unsupported devices
    } else {
      setCoords({
        alpha: alpha,
        beta: beta,
        gamma: gamma
      })
    }
  }

  const calibrate = () => {
    let newOffset
    
    if(offset.alpha || offset.beta || offset.gamma) {
      newOffset = {alpha: 0, beta: 0, gamma: 0}
    } else {
      newOffset = {
        alpha: coords.alpha,
        beta: coords.beta,
        gamma: coords.gamma
      }
    } 
    setOffset(newOffset)
  }

  useEffect(() => {
    window.addEventListener("deviceorientation", debounce(handleOrientationChange), 25)

    return () => window.removeEventListener("deviceorientation", debounce(handleOrientationChange))
  }, [])

  const values = {
    alpha: (coords.alpha - offset.alpha).toFixed(2),
    beta: (coords.beta - offset.beta).toFixed(2),
    gamma: (coords.gamma - offset.gamma).toFixed(2),
    baseAlpha: coords.alpha,
    baseBeta: coords.beta,
    baseGamma: coords.gamma
  }

  return {
    values: values, 
    calibrate: calibrate,
    offset: offset.alpha !== 0 && offset.beta !== 0 && offset.gamma !== 0
  }
}

export default useOrientation