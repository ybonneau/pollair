import './Map.css'
// react
import React, { useState, useEffect, useRef } from 'react';

// openlayers
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import {fromLonLat} from 'ol/proj'
import GeoJSON from 'ol/format/GeoJSON'

function MapWrapper(props) {

  // set intial state
  const [ map, setMap ] = useState()
  const [ featuresLayer, setFeaturesLayer ] = useState()

  // pull refs
  const mapElement = useRef()
  
  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef()
  mapRef.current = map

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect( () => {


    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    })

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        
        // OSM initial layer
        new TileLayer({
          source: new OSM()
        }),

        initalFeaturesLayer
        
      ],
      view: new View({
        center: fromLonLat([-1.151139, 46.160329]),
        zoom: 12
      }),
      controls: []
    })

    // save map and vector layer references to state
    setMap(initialMap)
    setFeaturesLayer(initalFeaturesLayer)

  },[])

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect( () => {
    if (props.features.length) { // may be null on first render
      
      const wktOptions = {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      }
  
      const test  = new GeoJSON().readFeatures(props.features[0],wktOptions)

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: test // make sure features is an array
        })
      )

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100,100,100,100]
      })

    }

  },[props.features])

  // render component
  return (           
    <div ref={mapElement} className="map-container" />
  ) 

}

export default MapWrapper