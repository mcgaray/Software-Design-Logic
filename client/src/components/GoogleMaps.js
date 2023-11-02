import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import React, { useMemo } from 'react'

function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD31hNHPBR8xViYUkvrXgLjeV8wST75shQ',
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 14.632673, lng: 121.100271 }), [])

  const imageMarker =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <Marker
        position={center}
        icon={imageMarker}
        title="Hello World"
        optimized="true"
      />
    </GoogleMap>
  )
}

export default GoogleMaps
