import "./Map.css";
// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

function MapWrapper(props) {
  // set intial state
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();

  // pull refs
  const mapElement = useRef();

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef();
  mapRef.current = map;


  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        // OSM initial layer
        new TileLayer({
          source: new OSM(),
        }),

        initalFeaturesLayer,
      ],
      view: new View({
        center: fromLonLat([-1.151139, 46.160329]),
        zoom: 12,
      }),
      controls: [],
    });

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (props.trajets !== undefined && props.trajets.length) {
      // may be null on first render
      const wktOptions = {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      };

      let target;
      if (props.select !== undefined && props.select.length) {
        target = props.trajets.find(
          (trajet) => trajet.cleaned_section._id.$oid === props.select
        );
      } else {
        target = props.trajets[0];
      }

      const trajetGeoJson = {
        type: "FeatureCollection",
        features: target.locations.map((point) => {
          return {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [
                point.data.loc.coordinates[0],
                point.data.loc.coordinates[1],
              ],
            },
          };
        }),
      };

      const test = new GeoJSON().readFeatures(trajetGeoJson, wktOptions);

      test[0].setStyle(new Style({
        image: new Icon(({
          color: '#8FCE00',
          crossOrigin: 'anonymous',
          src: 'https://openlayers.org/en/v6.12.0/examples/data/dot.png'
        }))
      }));

      test[test.length-1].setStyle(new Style({
        image: new Icon(({
          color: '#F44336',
          crossOrigin: 'anonymous',
          src: 'https://openlayers.org/en/v6.12.0/examples/data/dot.png'
        }))
      }));

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: test, // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }
  }, [props.select, props.trajets]);

  // render component
  return <div ref={mapElement} className="map-container" />;
}

export default MapWrapper;
