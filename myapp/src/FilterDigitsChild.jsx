function T7C(props){
    return(
        <>
        {
            props.digits
            .filter((d)=>d<10)
            .map(
                (d)=><h1>{d}</h1>
            )
        }
        </>
    )
}

export default T7C;