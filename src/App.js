import "./App.css";
import Filter from "./Filter/Filter";
import Generator from "./Filter/Generator";
import Navbar from "./Navbar/Navbar";
import MapFrame from "./Map/MapFrame";

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <Generator/>
      <MapFrame />
    </>
  );
}

export default App;
