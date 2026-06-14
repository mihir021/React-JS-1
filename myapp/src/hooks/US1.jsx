// craete a program to bild react app having btns to incriment and dicriment the number 
// by clicking that respanctive btn 

// also incriment f the number sude be perom only if the number is less then 10 and dicriment should be perom only if the number is more than 0 
import { useState } from 'react'

const US1 = () => {

    const [count, setCount] = useState(0)

  function handleIncriment() {
    if(count < 10){
        setCount(count + 1)
    }
  }

  function handleDicriment() {
    if(count > 0){
        setCount(count - 1)
    }
  }
  return (
    <div>
        <button onClick={handleIncriment}>Incriment</button>
        <button onClick={handleDicriment}>Dicriment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default US1