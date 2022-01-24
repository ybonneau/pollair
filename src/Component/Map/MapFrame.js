import React, { useState, useEffect } from 'react';
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

// openlayers
import GeoJSON from 'ol/format/GeoJSON'
import Feature from 'ol/Feature';

// components
import Map from './Map'
import Details from './Details'
import UserProfile from '../UserProfile/UserProfile';

function MapFrame() {
  
  // set intial state
  const [ features, setFeatures ] = useState({})

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock 
  //  GeoJson API (read from flat .json file in public directory)
  useEffect( () => {
    if (UserProfile.getTrajets().length !== 0) {
      console.log(UserProfile.getTrajets()[0])
      // parse fetched geojson into OpenLayers features
      //  use options to convert feature from EPSG:4326 to EPSG:3857
      const wktOptions = {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      }
      const parsedFeatures = UserProfile.getTrajets()[0]

      // set features into state (which will be passed into OpenLayers
      //  map component as props)
      setFeatures(parsedFeatures)
      console.log(parsedFeatures)
    }
    console.log('test')
    console.log(features)

  },[UserProfile.getTrajets().length])

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
          <Map features={features} />
        </Box>
      </Stack>
    </Box>
  );
}

export default MapFrame;
