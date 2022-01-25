import React from 'react';
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

// components
import Map from './MapWrapper'
import Details from './Details'

function MapFrame({trajets}) {
  const [select, setSelect] = React.useState([])
  return (
    <Box
        sx={{
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5",
          marginBottom: "5vh",
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
    >
      <Stack spacing={4} direction="row">
        <Details list={trajets} select={setSelect}/>
        <Box
          sx={{
          boxShadow: 2,
          width: "120vw",
          bgcolor: "white"
          }}
        >
          <Map trajets={trajets} select={select}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default MapFrame;
