import React from 'react'
import GoogleMaps from './GoogleMaps'
import Button from './Button'

const Map = () => {
  return (
    <div className="mx-40 flex flex-row py-16 justify-center items-center gap-28">
      <div>
        <GoogleMaps />
      </div>
      <div className="w-[400] flex flex-col justify-center gap-8 text-white">
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl">Where are we located?</h2>
          <p className="text-xl">
            Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila,
            Marikina City, Philippines
          </p>
        </div>
        <div>
          <Button title="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default Map
