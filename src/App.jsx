// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials'; // Import Socials component
import KLogo from './assets/K.png';
import './App.css';

function App() {
  // The mobile menu state is no longer needed with this new design
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <nav className="navbar">
            <Link to="/" className="nav-logo">
              <img src={KLogo} alt="My Portfolio Logo" className="nav-logo-img" />
            </Link>

            <div className="nav-center">
              <ul className="nav-links">
                <li><Link to="/projects" className="nav-page-link">Projects</Link></li>
                <li><Link to="/about" className="nav-page-link">About</Link></li>
                <li><Link to="/contact" className="nav-page-link">Contact</Link></li>
              </ul>
            </div>

            <Socials />
          </nav>

        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;