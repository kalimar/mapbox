mapboxgl.accessToken = '';

var map = new mapboxgl.Map({
  center: [-77.182, 38.898],
  container: 'map',
  style: 'mapbox://styles/kalimar/cj7ertn3a22j92rmqy96r8754',
  zoom: 11.3
});
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['best-spots']
  });
  
  if (!features.length) {
    return;
  }
  
  var feature = features[0];
  
  var html = '<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>' + '<img class="db logo" src="img/' + feature.properties.logo + '" />'
  
  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(html)
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
