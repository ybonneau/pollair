import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
