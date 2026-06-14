// caete react app to inc vale by 1 while click on the btn incriment and dicriss the value while click on btn


import { useReducer } from "react";

function reducer(state,action){
    if(action.type=="increment"){
        return state + 1
    }else if(action.type=="dec"){
        return state - 1
    }
}

function Ur(){
    const[state ,dispatch] = useReducer(reducer,0)
    return(
        <>
        <p>{state} </p>
            <button onClick={()=>dispatch({type:"increment"})}> 
                click me for inc
            </button>
            <button onClick={()=>dispatch({type:"dec"})}> 
                click me for dec
            </button>
        </>
    )
}

export default Ur