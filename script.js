mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/map/streets-v11",
  center: [0, 0],
  zoom: 2
});

async function askAI() {
  const query = document.getElementById("query").value;

  const response = await fetch("http://localhost:5000/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });

  const data = await response.json();

  // Example: AI sends back coordinates
  map.flyTo({
    center: [data.lng, data.lat],
    zoom: 14
  });
}
