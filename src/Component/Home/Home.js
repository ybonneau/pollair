import * as React from "react";
import Filter from "../Filter/Filter";
import Generator from "../Filter/Generator";
import MapFrame from "../Map/MapFrame";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [trajets, setTrajets] = React.useState([])
  return (
    <>
      <Navbar />
      <Filter updateTrajets={setTrajets}/>
      <Generator trajets={trajets}/>
      <MapFrame trajets={trajets}/>
    </>
  );
}

export default Home;
