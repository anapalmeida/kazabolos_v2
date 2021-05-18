mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcGFsbWVpZGFqMSIsImEiOiJja2NjcWR2N20wNzFyMnJuenNveWdub2VvIn0.2JhSco28mDvl00WcbaEm2w';

var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [-46.872935, -23.511368], // starting position
    zoom: 10 // starting zoom
});

map.on('load', function () {
    // Add a data source containing GeoJSON data.
    map.addSource('sdp', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline sdp.
                'coordinates': [
                    [
                        [-46.94171841284178, -23.425994790182926],
                        [-46.8988030686035, -23.569095634358636],
                        [-46.83340008398436, -23.528731435547535],
                        [-46.76868374487303, -23.491188699826143],
                        [-46.86000759741209,-23.45607617334226], 

                    ]
                ]
            }
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'sdp',
        'type': 'fill',
        'source': 'sdp', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#602E1C', // blue color fill
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'sdp',
        'layout': {},
        'paint': {
            'line-color': '#602E1C',
            'line-width': 3
        }
    });
});