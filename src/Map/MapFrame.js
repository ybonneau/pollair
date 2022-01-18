import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

// openlayers
import GeoJSON from 'ol/format/GeoJSON'
import Feature from 'ol/Feature';

// components
import Map from './Map'

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
    <>
    <Grid container>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
            <Box
                sx={{
                boxShadow: 2,
                width: "50vw",
                bgcolor: "white",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5vh",
                fontFamily: "Roboto",
                }}
            >
                <Map features={features} />
            </Box>
        </Grid>
    </Grid>
    </>
  );
}

export default MapFrame;
