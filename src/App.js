import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Histo from "./Component/HistogramPage/Histo"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/histogramme" element={<Histo />} />
        
      </Routes>
    </>
  );
}

export default App;
