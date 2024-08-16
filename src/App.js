import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from './Pages/Home/AboutMe';


function App() {
  return (
  <div className="App"> 
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="*" element ={<div>404 Not Found</div>}></Route>
      </Routes>
    </div>
  </Router>
  </div>
  );
}

export default App;
