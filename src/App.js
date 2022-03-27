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



function App() {
  return (
    <Router>
      <Navbar />
      <main>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      </Routes>
      

      </main>
    </Router>
  );
}

export default App;
