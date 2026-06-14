
function T8C(props) {
    return(
        <>
        {
            props.product.map(
                (p)=><div key={p.id}>
                    <h1>{p.title}</h1>
                    <h2>{p.price}</h2>
                    <h3>{p.rating}</h3>
                    <img src={p.img} alt={p.title} width="200px"/>
                </div>
            )
        }
        </>
    )
}

export default T8C;