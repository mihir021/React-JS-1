// use effect 

import { useEffect , useState } from "react";

// useEffect(()=>{},[])

function Ue(){
    const [count,setcount] = useState(0)
    useEffect(()=>{
        alert("click "+count.toString())
    },[count])

    function handel(){
        setcount(count + 1)
    }
    return(
        <>
            {count}
            <button onClick={handel}>
                count {count}
            </button>
        </>
    )
}

export default Ue