async function getCoords() {
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

function buildMap(coords) {
    const myMap = L.map('map', {
        center: coords,
        zoom: 12,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
    }).addTo(myMap)
    /*
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZ2c5MjI0ODV6IiwiYSI6ImNsMDBjYzJ2NTBpeHkzY3MwbDBocTY1ZDEifQ.MMapjdmhnr8tY9RmuqzLfw'
    }).addTo(map);
    */
}

window.onload = asnyc () => {
    const coords = await getCoords()
    buildMap(coords)
}