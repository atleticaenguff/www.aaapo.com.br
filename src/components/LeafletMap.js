import React, { Component } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

class LeafletMap extends Component {
  render() {
    const position = [this.props.lat, this.props.lng]
    const style = {
      height: this.props.height,
      width: this.props.width,
    }
    return (
      <MapContainer
        dragging={false}
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={style}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    )
  }
}

export default LeafletMap