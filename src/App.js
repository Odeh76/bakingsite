import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Products from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Products />
     <Footer /> 
    </div>
  );
}

export default App;
