function addMarker(data) {

    var features = data.map(items => { items.map() //iterate through array...
        let longitude = item.longitude,
            latitude = item.latitude,
            iconFeature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326',
                    'EPSG:3857')),

                type: 'click',
                desc: item.preferredGazetteerName,
            });
        return iconFeature;
    });

    var vectorSource = new ol.source.Vector({
        features: features //add an array of features
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    map.addLayer(vectorLayer);

}

addMarker(json);

//

