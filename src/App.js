import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects/Projects';
import './App.css';
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <Router style={{ backgroundColor: "blue", color: "white" }}>
      <Navbar />
      <main>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      

      </main>
    </Router>
  );
}

export default App;
