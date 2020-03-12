import React from 'react'
import L from 'leaflet'
import borderData from './border.js'
import leafletPip from 'leaflet-pip'

// random number generators for lat and long coordinates

function randomInt(max, min) {
    return (min + (Math.random() * (max - min)))
}

let randomLong = randomInt(-71.51022535353107, -73.42613118833583)

let randomLat = randomInt(45.007561302382754, 42.730315121762715)

// function to check if random point is within Vermont polygon


let gjLayer = L.geoJSON(borderData);
// let pointInVermont

checkPoint()

function checkPoint() {
    let pointInVermont = leafletPip.pointInLayer([randomLong, randomLat], gjLayer)
    console.log(pointInVermont)
    if (pointInVermont.length === 0) {
        checkPoint()
    }
}



// loop to keep generating random points until point is in Vermont polygon



// Maplet component

class Maplet extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 43.9,
            lng: -72.7317,
            zoom: 8
        }
    }

    componentDidMount = () => {
        let myMap = L.map('map').setView([this.state.lat, this.state.lng], this.state.zoom);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(myMap);

        L.geoJSON((borderData), {
            fillOpacity: 0,
        }).addTo(myMap);

        L.marker([randomLat, randomLong]).addTo(myMap)

    }

    render() {

        return (
            <div id='map'>

            </div>
        )
    }
}




export default Maplet

