// create one file names f1.jsx and other files f2.jsx and f3.jsx
// main file contains form with the follwing fileds fname last name text area (msg)
// city (drop down) gender (radio btn) pass value of all fileds from f1.jsx to f2.jsx to f3.jsx and display the values 
// in alrt box using useContext hook and from + use state hook 

import { useContext } from "react";
import { createContext } from "react";
import F2 from "./F2";
import {useState} from "react";


const Fname = createContext();
const Lname = createContext();
const Msg = createContext();
const City = createContext();
const Gender = createContext();

function UCContext() {
    function handleFname(e) {
        e.preventDefault();
        setFname(e.target.value);
    }
    function handleLname(e) {
        e.preventDefault();
        setLname(e.target.value);
    }
    function handleMsg(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }
    function handleCity(e) {
        e.preventDefault();
        setCity(e.target.value);
    }


     const [fname, setFname] = useState("");
     const [lname, setLname] = useState("");
     const [msg, setMessage] = useState("");
     const [city, setCity] = useState("");
     const [gender, setGender] = useState("");
  return (
    <>
      <form action="">
        <Fname.Provider value={fname}>
          <input type="text" placeholder="fname" value={fname} onChange={handleFname} />
        </Fname.Provider>
        <Lname.Provider value={lname}>
          <input type="text" placeholder="lname" value={lname} onChange={handleLname} />
        </Lname.Provider>
        <Msg.Provider value={msg}>
          <textarea name="" id="" cols="30" rows="10" placeholder="msg" value={msg} onChange={handleMsg}></textarea>
        </Msg.Provider>
        <City.Provider value={city}>
          <select name="" id="" value={city} onChange={handleCity}>
            <option value="">city</option>
          <option value="">city1</option>
          <option value="">city2</option>
        </select>
        </City.Provider>
        <Gender.Provider value={gender}>
          <div>
            <input type="radio" name="gender" id="" value={gender} onChange={() => setGender("male")} /> male
            <input type="radio" name="gender" id="" value={gender} onChange={() => setGender("female")} /> female
          </div>
        </Gender.Provider>
      </form>
    </>
  );
}

export default UCContext;
export { Fname, Lname, Msg, City, Gender };
