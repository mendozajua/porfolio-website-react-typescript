import React from 'react';
import logo from './logo.svg';
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import './App.css';
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        {/*<Skills />*/}
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
