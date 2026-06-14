// having a btn which changes img by clicking it 
import { useState } from 'react'

const US2 = () => {

    const [img, setImg] = useState("https://www.w3schools.com/w3images/lights.jpg")

  function handleClick() {
    setImg("https://www.w3schools.com/w3images/nature.jpg")
  }
  return (
    <div>
        <button onClick={handleClick}>Change Image</button>
        <img src={img} alt="Image" />
    </div>
  )
}

export default US2