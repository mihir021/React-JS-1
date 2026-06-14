import axios from "axios";
import { useEffect, useState } from "react";

function Axios (){
    const[img,seting] = useState("")
    useEffect(()=>{
        setInterval(()=>{
            axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
                seting(response.data.message)
            })
        },2000)
    },[])
    return(
        <>
        
            <img src={img} alt="random dog" />
        </>
    )
}

export default Axios