function Map() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            {
                arr.map((s, index) => {
                    return <h3 key={index}>{s}</h3>
                })
            }
        </>
    )
}

export default Map