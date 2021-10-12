// Initialize and add the map
function initMap() {
  // The location
  const workshopLocation = { lat: 47.49373204053382, lng: 19.231105563710102 };
  // The map, centered at the location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: workshopLocation,
  });
  // The marker, positioned at the location
  const marker = new google.maps.Marker({
    position: workshopLocation,
    map: map,
  });
}
