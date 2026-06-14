// write a program to bild a react app with two number filed num1 and num2 and display the entered value on the same page and 
// then click on add btn to calculate the sum of two numbers and display in h2 tag in same page 
// using use state hooks 

// dooo

import {useState} from "react";

function Task1() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [a, setResult] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setResult(parseInt(n1)+parseInt(n2))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <h2>Result: {a}</h2>
        </>
        
    )
}

export default Task1;