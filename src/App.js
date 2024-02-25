import React, { useState } from 'react';
import Map from './Map';
import LocationList from './LocationList';

const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];

function App() {
  const [locations, setLocations] = useState(storedLocations);
  const [position, setPosition] = useState(null);
  const [locate, setLocate] = useState(false);

  const handleLocationAdd = (location) => {
    const updatedLocations = [...locations, location];
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  };

  const handleLocationRemove = (index) => {
    if (!window.confirm('Delete this pin?')) return;
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
    setLocations(updatedLocations);
    setPosition(null);
    setLocate(false);
  };

  return (
    <div className='h-full w-full flex flex-nowrap'>
      <LocationList
        locations={locations}
        onLocationRemove={handleLocationRemove}
        setPosition={setPosition}
        setLocate={setLocate}
      />
      <Map
        onLocationAdd={handleLocationAdd}
        setPosition={setPosition}
        position={position}
        locate={locate}
        setLocate={setLocate}
      />
    </div>
  );
}

export default App;
