import { Link } from 'react-router-dom';

function Product({ products }) {
  return (
    <div>
      <h1 style={{ color: 'green' }}>Product Details</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img
              src={product.img}
              alt={`${product.name} image`}
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      <Link to="/home">Back to Home Page</Link>
    </div>
  );
}

export default Product;
