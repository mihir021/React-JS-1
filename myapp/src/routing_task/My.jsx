import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';

function My() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/react">React JS</Link>
            </li>
            <li>
              <Link to="/node">Node JS</Link>
            </li>
            <li>
              <Link to="/express">Express JS</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/react" element={<Ex1 />} />
          <Route path="/node" element={<Ex2 />} />
          <Route path="/express" element={<Ex3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default My;
