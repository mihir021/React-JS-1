// add two btns dark mode and light mode 
// initialy backgrand shode be wight and text black 
// by clicking on dark mode btn backgrand shode be black and text white


// do 
import { useState } from 'react'

const US4 = () => {

    const [mode, setMode] = useState("light")

  function handleDarkMode() {
    setMode("dark")
  }

  function handleLightMode() {
    setMode("light")
  }
  return (
    // make sure text color is black in light mode
    
  )
}

export default US4