// write a componet to incries the values by 5 while click the btn initalize value with 20 
// use redusar hook to perform task 

    import { useReducer } from "react";

    function reducer(state,action){
        if(action.type=="increment"){
            return state + 5
        }
    }

    function Ur(){
        const[state ,dispatch] = useReducer(reducer,20)
        return(
            <>
                <button onClick={()=>dispatch({type:"increment"})}> 
                    click me {state}
                </button>
            </>
        )
    }

    export default Ur