import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
//import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
      <header className="header">
  <h1 className="greeting">Welcome! The only bugs here are the ones I haven’t fixed yet :)</h1>
</header>

        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;