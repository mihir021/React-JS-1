import { useState } from 'react'

const US = () => {

    const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default US