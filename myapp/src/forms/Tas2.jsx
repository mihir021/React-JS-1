// crete react app which contains form with the filed named , gmail id , password , conform pass 
// and submit btn 
// 1> when the form submited the vales of pass and conform pass filed must be same else it will give and error msg in alert box 
// 2> also lenght of pass must be greater than 8 else it will give an error msg in alert box
// 3> if form submited sucessfully then display name and gmail in alrt box 

import {useState} from "react";

function Task2() {
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(pass !== cpass) {
            alert("Password and Confirm Password must be same");
        } else if(pass.length < 8) {
            alert("Password must be greater than 8 characters");
        } else {
            alert(`Name: ${name}, Gmail: ${gmail}`);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />
                <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={cpass} onChange={(e) => setCpass(e.target.value) }/>
             </form>
        </div>
    );
}        

export default Task2;