// FUMU Sports GIS Mapping Application
// CSE310 Module 3 - GIS Mapping

// Sports location data used by the map.
const sportsLocations = [

    // Football locations
    {
        name: "FUMU Sports Site - Kampala Central",
        sport: "Football",
        city: "Kampala",
        area: "Central",
        lat: 0.3136,
        lng: 32.5811,
        info: "Community football training and youth practice area."
    },

    {
        name: "FUMU Sports Site - Rubaga",
        sport: "Football",
        city: "Kampala",
        area: "Rubaga",
        lat: 0.3005,
        lng: 32.5485,
        info: "Football activities for community youth."
    },

    {
        name: "FUMU Sports Site - Nakawa",
        sport: "Football",
        city: "Kampala",
        area: "Nakawa",
        lat: 0.3476,
        lng: 32.6384,
        info: "Football practice and community sports activities."
    },

    {
        name: "FUMU Sports Site - Makindye",
        sport: "Football",
        city: "Kampala",
        area: "Makindye",
        lat: 0.2857,
        lng: 32.5667,
        info: "Community football practice location."
    },

    {
        name: "FUMU Sports Site - Kira",
        sport: "Football",
        city: "Kira",
        area: "Wakiso",
        lat: 0.4030,
        lng: 32.6330,
        info: "Youth football training location."
    },

    {
        name: "FUMU Sports Site - Entebbe",
        sport: "Football",
        city: "Entebbe",
        area: "Wakiso",
        lat: 0.0512,
        lng: 32.4637,
        info: "Community football and youth training area."
    },

    // Basketball locations
    {
        name: "FUMU Sports Site - Kololo",
        sport: "Basketball",
        city: "Kampala",
        area: "Central",
        lat: 0.3410,
        lng: 32.5940,
        info: "Basketball practice and youth development area."
    },

    {
        name: "FUMU Sports Site - Ntinda",
        sport: "Basketball",
        city: "Kampala",
        area: "Nakawa",
        lat: 0.3650,
        lng: 32.6120,
        info: "Community basketball activities."
    },

    {
        name: "FUMU Sports Site - Bugolobi",
        sport: "Basketball",
        city: "Kampala",
        area: "Nakawa",
        lat: 0.3230,
        lng: 32.6200,
        info: "Basketball practice and community recreation."
    },

    {
        name: "FUMU Sports Site - Kisenyi",
        sport: "Basketball",
        city: "Kampala",
        area: "Central",
        lat: 0.3070,
        lng: 32.5650,
        info: "Youth basketball practice location."
    },

    {
        name: "FUMU Sports Site - Mukono",
        sport: "Basketball",
        city: "Mukono",
        area: "Mukono",
        lat: 0.3533,
        lng: 32.7553,
        info: "Community basketball activities."
    },

    {
        name: "FUMU Sports Site - Jinja",
        sport: "Basketball",
        city: "Jinja",
        area: "Jinja",
        lat: 0.4479,
        lng: 33.2026,
        info: "Basketball practice and youth activities."
    },

    // Tennis locations
    {
        name: "FUMU Sports Site - Lugogo",
        sport: "Tennis",
        city: "Kampala",
        area: "Nakawa",
        lat: 0.3400,
        lng: 32.6130,
        info: "Tennis practice and skills development."
    },

    {
        name: "FUMU Sports Site - Muyenga",
        sport: "Tennis",
        city: "Kampala",
        area: "Makindye",
        lat: 0.2880,
        lng: 32.6020,
        info: "Community tennis practice location."
    },

    {
        name: "FUMU Sports Site - Kansanga",
        sport: "Tennis",
        city: "Kampala",
        area: "Makindye",
        lat: 0.2790,
        lng: 32.5960,
        info: "Tennis training and community recreation."
    },

    {
        name: "FUMU Sports Site - Kanyanya",
        sport: "Tennis",
        city: "Kampala",
        area: "Kawempe",
        lat: 0.3790,
        lng: 32.5600,
        info: "Youth tennis practice area."
    },

    {
        name: "FUMU Sports Site - Mbarara",
        sport: "Tennis",
        city: "Mbarara",
        area: "Mbarara",
        lat: -0.6072,
        lng: 30.6545,
        info: "Community tennis activities."
    },

    {
        name: "FUMU Sports Site - Fort Portal",
        sport: "Tennis",
        city: "Fort Portal",
        area: "Kabarole",
        lat: 0.6710,
        lng: 30.2750,
        info: "Tennis practice and youth development."
    },

    // Athletics locations
    {
        name: "FUMU Sports Site - Namboole",
        sport: "Athletics",
        city: "Kampala",
        area: "Nakawa",
        lat: 0.3520,
        lng: 32.6380,
        info: "Athletics and running practice location."
    },

    {
        name: "FUMU Sports Site - Kawempe",
        sport: "Athletics",
        city: "Kampala",
        area: "Kawempe",
        lat: 0.3830,
        lng: 32.5520,
        info: "Community running and athletics activities."
    },

    {
        name: "FUMU Sports Site - Masaka",
        sport: "Athletics",
        city: "Masaka",
        area: "Masaka",
        lat: -0.3338,
        lng: 31.7341,
        info: "Athletics training and community recreation."
    },

    {
        name: "FUMU Sports Site - Mbale",
        sport: "Athletics",
        city: "Mbale",
        area: "Mbale",
        lat: 1.0821,
        lng: 34.1750,
        info: "Athletics and youth training activities."
    },

    {
        name: "FUMU Sports Site - Gulu",
        sport: "Athletics",
        city: "Gulu",
        area: "Gulu",
        lat: 2.7746,
        lng: 32.2990,
        info: "Community athletics activities."
    },

    {
        name: "FUMU Sports Site - Arua",
        sport: "Athletics",
        city: "Arua",
        area: "Arua",
        lat: 3.0303,
        lng: 30.9110,
        info: "Athletics practice and youth development."
    }
];


// Create the Leaflet map.
const map = L.map("map").setView([1.0, 32.5], 7);


// Add OpenStreetMap tiles to the map.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);


// Create a layer to hold all map markers.
const markerLayer = L.layerGroup().addTo(map);


// Store marker objects for filtering.
const markerObjects = [];


// Create the information popup for a location.
function createPopup(location) {

    return `
        <div>
            <h3>${location.name}</h3>

            <p>
                <strong>Sport:</strong>
                ${location.sport}
            </p>

            <p>
                <strong>City:</strong>
                ${location.city}
            </p>

            <p>
                <strong>Area:</strong>
                ${location.area}
            </p>

            <p>
                ${location.info}
            </p>
        </div>
    `;
}


// Add one location marker to the map.
function addMarker(location) {

    const marker = L.marker([
        location.lat,
        location.lng
    ]);

    marker.bindPopup(
        createPopup(location)
    );

    markerObjects.push({
        marker: marker,
        sport: location.sport
    });

    marker.addTo(markerLayer);
}


// Load all sports locations.
function loadMarkers() {

    sportsLocations.forEach(
        addMarker
    );

    updateMarkerCount(
        sportsLocations.length
    );
}


// Create the sport filter options.
function populateSportFilter() {

    const filter =
        document.getElementById("sportFilter");

    const sports =
        [...new Set(
            sportsLocations.map(
                location => location.sport
            )
        )];

    sports.sort();

    sports.forEach(sport => {

        const option =
            document.createElement("option");

        option.value = sport;
        option.textContent = sport;

        filter.appendChild(option);
    });
}


// Display only locations matching the selected sport.
function filterMarkers(selectedSport) {

    markerLayer.clearLayers();

    let visibleCount = 0;

    markerObjects.forEach(item => {

        if (
            selectedSport === "All" ||
            item.sport === selectedSport
        ) {

            item.marker.addTo(
                markerLayer
            );

            visibleCount++;
        }
    });

    updateMarkerCount(
        visibleCount
    );
}


// Update the number of visible markers.
function updateMarkerCount(count) {

    const counter =
        document.getElementById(
            "markerCount"
        );

    counter.textContent =
        `${count} location${count === 1 ? "" : "s"} shown`;
}


// Reset the map and display every location.
function resetMap() {

    document.getElementById(
        "sportFilter"
    ).value = "All";

    filterMarkers("All");

    map.setView(
        [1.0, 32.5],
        7
    );
}


// Listen for changes to the sport filter.
document.getElementById(
    "sportFilter"
).addEventListener(
    "change",
    function(event) {

        filterMarkers(
            event.target.value
        );
    }
);


// Listen for clicks on the reset button.
document.getElementById(
    "resetButton"
).addEventListener(
    "click",
    resetMap
);


// Start the application.
populateSportFilter();
loadMarkers();