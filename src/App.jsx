import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import KLogo from './assets/K.webp';
import FooterSocials from './components/FooterSocials';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
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

        {/* New footer */}
        <footer className="App-footer">
          <nav className="footer-navbar">
            {/* Your name on the left */}
            <div className="footer-name">
              <Link to="/" className="footer-name-link">Kyle Whitman</Link>
            </div>
            <div className="footer-nav-center">
              <ul className="footer-nav-links">
                <li><Link to="/projects" className="footer-nav-page-link">Projects</Link></li>
                <li><Link to="/about" className="footer-nav-page-link">About</Link></li>
                <li><Link to="/contact" className="footer-nav-page-link">Contact</Link></li>
              </ul>
            </div>

            <FooterSocials />
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
