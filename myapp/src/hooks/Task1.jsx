// using useReduser creat a react app
// display product quntity add tw btn
// add item and remove item quntity must no go beov ezero use usereduser to mange the state

import { useReducer } from "react";

function reducer(qu, action) {
  if (qu > 0) {
    if (action.type == "add") {
      return qu + 1;
    } else if (action.type == "sub") {
      return qu - 1;
    }
  }
  return 0;
}
function Ur() {
  const [qu, dispatch] = useReducer(reducer, 10);
  return (
    <>

      qu : {qu}
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <button onClick={() => dispatch({ type: "sub" })}>sub</button>
    </>
  );
}

export default Ur;
