import React, { useEffect } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { useMapEvents } from 'react-leaflet/hooks';

function Map({ onLocationAdd, setPosition, position, locate, setLocate }) {
  useEffect(() => {
    setLocate(false);
  }, []);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    if (locate && position) {
      map.panTo(position);
    }

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLocationAdd(position);
            }}
            className='flex ml-auto mr-auto'
          >
            Add
          </button>
        </Popup>
      </Marker>
    );
  }

  return (
    <div className='h-full w-full'>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full w-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
