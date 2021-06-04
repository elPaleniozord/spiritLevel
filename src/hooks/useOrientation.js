import React, {useState, useEffect} from 'react'

const useOrientation = () => {
  const coords = useState({})

  const handleOrientationChange = (e) => {

  }

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientationChange)
  })

  return coords
}