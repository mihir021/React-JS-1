function Product(props) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {props.products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;