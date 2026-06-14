// create one file named My.jsx which cntines link for react js node js and express js 
// create componets for each link and add heading and one img react js node js and express js in componet files 
// ex1.jsx ex2.jsx and ex3.jsx res 

import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nopage from './Nopage';  

function Main() {
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>

        </div>
    )
}

export default Main;