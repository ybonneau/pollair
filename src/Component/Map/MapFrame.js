import React, { useState, useEffect } from 'react';
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

// openlayers
import GeoJSON from 'ol/format/GeoJSON'
import Feature from 'ol/Feature';

// components
import Map from './Map'
import Details from './Details'

function MapFrame() {
  
  // set intial state
  const [ features, setFeatures ] = useState([])

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock 
  //  GeoJson API (read from flat .json file in public directory)
  useEffect( () => {

    fetch('./map.geojson')
      .then(response => response.json())
      .then( (fetchedFeatures) => {

        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures)

      })

  },[])

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
