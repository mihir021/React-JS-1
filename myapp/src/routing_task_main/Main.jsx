import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';


function Main() {

    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    const contactData = [
        { email: 'contact@example.com', phone: '123-456-7890' },
        { email: 'info@example.com', phone: '098-765-4321' }
    ];
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
             <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product products={products} />} />
          <Route path="/contact" element={<Contact contactData={contactData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
