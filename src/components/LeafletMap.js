import React, { Component } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

class LeafletMap extends Component {
  render() {
    const position = [this.props.lat, this.props.lng]
    const style = {
      height: this.props.height,
      width: this.props.width,
    }

    if (typeof window !== "undefined") {
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
          <Marker position={position}></Marker>
        </MapContainer>
      )
    }
    return null
  }
}

export default LeafletMap
