import { useReducer } from "react";

function reducer(state,action){
    if(action.type=="increment"){
        return state + 1
    }
}

function Ur(){
    const[state ,dispatch] = useReducer(reducer,0)
    return(
        <>
            <button onClick={()=>dispatch({type:"increment"})}> 
                click me {state}
            </button>
        </>
    )
}

export default Ur