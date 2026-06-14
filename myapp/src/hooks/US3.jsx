// to perform the task as ask belove 

// 1> add a btn (change text)
// 2> add hello text in h2 tag by clicking on change text btn text shod chnge to welcome revart back

import { useState } from 'react'

const US3 = () => {

    const [text, setText] = useState("Hello")

  function handleClick() {
    if(text === "Hello"){
        setText("Welcome")
    }else{
        setText("Hello")
    }
  }
  return (
    <div>
        <button onClick={handleClick}>Change Text</button>
        <h2>{text}</h2>
    </div>
  )
}

export default US3