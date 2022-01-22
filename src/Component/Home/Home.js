import * as React from "react";
import Filter from "../Filter/Filter";
import Generator from "../Filter/Generator";
import MapFrame from "../Map/MapFrame";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Filter />
      <Generator />
      <MapFrame />
    </>
  );
}

export default Home;
