import { createContext } from "react";
import UC1 from "./UC1";

const Fname = createContext();

function UCContext() {
  return (
    <>
      <Fname.Provider value={"Mihir"}>
        <UC1 />
      </Fname.Provider>
    </>
  );
}

export default UCContext;
export { Fname };
