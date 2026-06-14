// 1> create one main filed named Pc.jsx and other two componet files C1.jsx and C2.jsx 
// 2> pass 1st name  and last name from pc.jsx file to c2.jsx file and display welcome abc and xyz in broser h3 tag 


import { createContext } from "react";
import UC1 from "./C1";

const Fname = createContext();
const Lname = createContext();

function UCContext() {
  return (
    <>
      <Fname.Provider value={"Mihir"}>
        <Lname.Provider value={"Rathod"}>
          <UC1 />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
}

export default UCContext;
export { Fname, Lname };
