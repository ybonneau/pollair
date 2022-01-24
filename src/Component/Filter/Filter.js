import * as React from "react";
import { Box } from "@mui/material";
import FilterContent from "./FilterContent";

function Filter({updatePolluant, updateTrajets}) {
  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          width: "50vw",
          bgcolor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5vh",
          border: 3,
          borderRadius: "3px",
          borderColor: "#0bbbd7",
          paddingTop: "2vh",
          paddingRight: "4vw",
          paddingLeft: "4vw",
          paddingBottom: "2vh",
          fontFamily: "Roboto",
        }}
      >
        <FilterContent polluant={updatePolluant} trajets={updateTrajets}/>
      </Box>
    </>
  );
}

export default Filter;
