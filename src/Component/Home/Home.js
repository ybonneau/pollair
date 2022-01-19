import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Filter from "../Filter/Filter";
import MapFrame from "../Map/MapFrame";

function Home() {
  return (
    <>
      <Navbar />
      <Filter />
      <MapFrame/>
    </>
  );
}

export default Home;
