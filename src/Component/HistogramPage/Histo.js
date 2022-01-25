import React from "react";
import Navbar from "../Navbar/Navbar";
import BarChart from "../Histogram/BarChart"

function Histo() {
    const data = []    
  return (
    <>
      <Navbar />
      <BarChart data={data} />

    </>
  );
}

export default Histo;