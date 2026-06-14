function Map() {
    const product = [
        { id: 1, name: "laptop", price: 50000 },
        { id: 2, name: "mobile", price: 20000 }
    ]

    return (
        <>
            {
                product.map((item) => {
                    return (
                       <li key={item.id}>{item.name} - ${item.price}</li>
                    )
                })
            }
        </>
    )
}

export default Map  