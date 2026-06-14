// num1 and num2 and option for + - * / and display the result in h2 tag in same page using use state hooks

import {useState} from "react";

function Task3() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [op, setOp] = useState("+");
    const [a, setResult] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(op === "+") {
            setResult(parseInt(n1)+parseInt(n2));
        } else if(op === "-") {
            setResult(parseInt(n1)-parseInt(n2));
        } else if(op === "*") {
            setResult(parseInt(n1)*parseInt(n2));
        } else if(op === "/") {
            if(parseInt(n2)==0){
                console.log("enter valid data")
                return
            }
            setResult(parseInt(n1)/parseInt(n2));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
                <select value={op} onChange={(e) => setOp(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <button type="submit">Calculate</button>
            </form>
            <h2>Result: {a}</h2>
        </>
        
    )
}

export default Task3;