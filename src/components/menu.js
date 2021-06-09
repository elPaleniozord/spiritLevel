import React, {useState} from 'react'

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav class={`menu ${collapsed}`}>
      
    </nav>
  )
}

export default Menu