import {useState} from "react";

function Form() {
//     const [name, setName] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(name);
//     }

//     return (
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 Enter your name: 
// //    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //                 <button type="submit">Submit</button>
// //             </form>
// //         </div>
//         <div>
//         </div>
// //     );

    // const [mycar,setMycar] = useState("Volvo");

    // function handleChange(e) {
    //     setMycar(e.target.value);
    // }

    // return (
    //   <>
    //     <Form>
    //       <h1>My Car is: {mycar}</h1>
    //       <select value={mycar} onChange={handleChange}>
    //         <option value="Volvo">Volvo</option>
    //         <option value="Audi">Audi</option>
    //       </select>
    //     </Form>
    //   </>
    // );

    const [s,setSize] = useState("Small");
    
    function handleChange(e) {
        setSize(e.target.value);
    }
    return (
        <>
            <input type="radio" value="Small" checked={s === "Small"} onChange={handleChange} />
            <label>Small</label>
            <input type="radio" value="Medium" checked={s === "Medium"} onChange={handleChange} />
            <label>Medium</label>
            <input type="radio" value="Large" checked={s === "Large"} onChange={handleChange} />
            <label>Large</label>
        </>
    );
}

export default Form;