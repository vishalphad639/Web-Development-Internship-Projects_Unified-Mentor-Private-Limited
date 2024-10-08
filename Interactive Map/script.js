// Initialize the map and set its view
const map = L.map("map").setView([20.5937, 78.9629], 5); // Center of India

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Locations to display on the map
const locations = [
  {
    name: "Taj Mahal, Agra",
    coordinates: [27.1751, 78.0421],
    description:
      "A UNESCO World Heritage site and one of the Seven Wonders of the World.",
  },
  {
    name: "Gateway of India, Mumbai",
    coordinates: [18.9218, 72.8347],
    description: "An arch monument built during the 20th century.",
  },
  {
    name: "India Gate, New Delhi",
    coordinates: [28.6129, 77.2295],
    description:
      "A war memorial dedicated to the soldiers of the British Indian Army.",
  },
  {
    name: "Hawa Mahal, Jaipur",
    coordinates: [26.9853, 75.912],
    description:
      "A palace with a unique façade and a blend of Rajput and Mughal architecture.",
  },
  {
    name: "Meenakshi Temple, Madurai",
    coordinates: [9.9195, 78.1198],
    description: "An historic Hindu temple dedicated to Goddess Meenakshi.",
  },
];

// Function to add markers to the map
locations.forEach((location) => {
  const marker = L.marker(location.coordinates).addTo(map);
  marker.bindPopup(
    `<strong>${location.name}</strong><br>${location.description}`
  );
});

// Search functionality
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm)
  );

  // Clear all markers from the map
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  // Add filtered markers to the map
  filteredLocations.forEach((location) => {
    const marker = L.marker(location.coordinates).addTo(map);
    marker.bindPopup(
      `<strong>${location.name}</strong><br>${location.description}`
    );
  });

  // If there's a match, set view to the first match
  if (filteredLocations.length > 0) {
    const firstMatch = filteredLocations[0];
    map.setView(firstMatch.coordinates, 12);
  }
});
