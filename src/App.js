import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Homescreen";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from './Pages/Home/AboutMe';
import PerformingArts from './Pages/Home/PerformingArts';
import LifeAdventures from './Pages/Home/LifeAdventures';
import FAQs from './Pages/Home/FAQs';


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
        <Route path="/performing-arts" element={<PerformingArts />} />
        <Route path="life-adventures" element={<LifeAdventures />}/>
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element ={<div>404 Not Found</div>}></Route>
      </Routes>
      <Footer />
    </div>
  </Router>
  </div>
  );
}

export default App;
