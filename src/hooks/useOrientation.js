import React, {useState, useEffect} from 'react'
import debounce from '../utils/debounce'

const useOrientation = () => {
  const [coords, setCoords] = useState({})

  const handleOrientationChange = (e) => {
    let absolute = e.absolute
    let alpha = e.alpha //[-360, 360] range

    //add 90 degrees to simplify computation by removing negative angles
    let beta = e.beta // - offset //[-180, 180] range
    let gamma = e.gamma // - offset //[-90, 90] range

    if(isNaN(beta) || beta === null) {

      console.log('No device orientation support')
      //handle unsupported devices
    } else {
      setCoords({
        x:alpha.toFixed(2),
        y:beta.toFixed(2),
        z:gamma.toFixed(2)
      })
    }
  }

  useEffect(() => {
    window.addEventListener("deviceorientation", debounce(handleOrientationChange), 25)

    return () => window.removeEventListener("deviceorientation", debounce(handleOrientationChange))
  }, [])

  return coords
}

export default useOrientation