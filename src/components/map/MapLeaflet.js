import "./MapLeaflet.css"

import { MapContainer,  TileLayer } from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import L from "leaflet"
import LeafletGeo from "./LeafletGeo"

const MapLeaflet = () => {
    const position = [36.806389, 10.181667]
        
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeo/>
      </MapContainer>
    )
}

//----------------Marker configuration ------------//

let DefaultIcon= L.icon({
    iconUrl:require("./markerIcon/icon.png") ,
    iconSize: new L.Point(50, 65),
    iconAnchor: new L.Point(25,65),
    popupAnchor: new L.Point(2, -40)
})

L.Marker.prototype.options.icon = DefaultIcon;
 //----------------------------------------------------------//
export default MapLeaflet