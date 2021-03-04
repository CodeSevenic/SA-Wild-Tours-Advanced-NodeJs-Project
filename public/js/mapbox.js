export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY29kZXNldmVuaWMiLCJhIjoiY2tscncyY3FqMDczeDJ4cHYxZGxsOXZpbSJ9.7iC1iUSU6RN3BCOGnKXQkA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/codesevenic/ckls42qt7140417okjm924ao0',
    scrollZoom: false,
    // center: [31.810498311359957, -24.756301227447324],
    // zoom: 5,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
