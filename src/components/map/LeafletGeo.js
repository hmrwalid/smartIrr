import  { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet"
const LeafletGeo = () => {
const map = useMap ();
    useEffect(()=>{
         L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
              var bbox = e.geocode.bbox;
              var lat_lng= e.geocode.center;
              L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
              map.fitBounds(bbox);
            })
            .addTo(map);
    },[])
  return (
null
    )
}

export default LeafletGeo