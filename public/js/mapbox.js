const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiY29kZXNldmVuaWMiLCJhIjoiY2tscncyY3FqMDczeDJ4cHYxZGxsOXZpbSJ9.7iC1iUSU6RN3BCOGnKXQkA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/codesevenic/ckls42qt7140417okjm924ao0',
  // center: [31.810498311359957, -24.756301227447324],
  // zoom: 5,
});
