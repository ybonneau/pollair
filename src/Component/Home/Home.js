import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Filter from "../Filter/Filter";
import Generator from "../Filter/Generator";
import MapFrame from "../Map/MapFrame";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const location = useLocation();
  const {state} = location
  const [id, setId] = React.useState(null);

  React.useEffect(() => {
    if (state) {
      fetch("http://localhost:8080/personne/"+state.id)
        .then((res) => res.json())
        .then((result) => {
          if(result.status === 200) {
            setId(result.data)
          } else {
            navigate('/')
          }
        });
    } else {
      fetch("http://localhost:8080/personne/createpersonne")
        .then((res) => res.json())
        .then((result) => setId(result.data));
    }
  }, []);

  console.log(id);
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
