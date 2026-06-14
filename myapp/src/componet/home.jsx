import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loging from './loging';
import FoodItem from './FoodItem';
import Contect from './contect';

function Home() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/food">Food Items</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/login" element={<Loging />} />
          <Route path="/food" element={<FoodItem />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
