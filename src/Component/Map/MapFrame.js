import React from 'react';
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

// components
import Map from './Map'
import Details from './Details'

function MapFrame({trajets}) {
  return (
    <Box
        sx={{
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5",
          marginBottom: "5vh",
          paddingTop: "2vh",
          paddingBottom: "2vh"
        }}
    >
      <Stack spacing={4} direction="row">
        <Details />
        <Box
          sx={{
          boxShadow: 2,
          width: "120vw",
          bgcolor: "white"
          }}
        >
          <Map features={trajets} />
        </Box>
      </Stack>
    </Box>
  );
}

export default MapFrame;
