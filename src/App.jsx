// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilteredTiles from "./pages/FilteredTiles";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./components/contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtered/:size" element={<FilteredTiles />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
