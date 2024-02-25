import React from 'react';

function LocationList({ locations, onLocationRemove, setPosition, setLocate }) {
  const toggleList = () => {
    document.getElementById('list-container').classList.toggle('active');
  };

  return (
    <div className='h-full w-auto px-5 pt-3 bg-gray-900 transition-all ease-in-out overflow-hidden'>
      <div
        onClick={toggleList}
        className='w-6 h-6 rounded-full z-[1002] cursor-pointer ml-auto mr-0 mb-4'
      >
        <svg
          data-slot='icon'
          data-darkreader-inline-stroke=''
          fill='none'
          strokeWidth='1.5'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
          ></path>
        </svg>
      </div>
      <div id='list-container' className='sidebar'>
        <div
          id='list'
          className='max-h-[100vh_-_100px] overflow-y-auto text-white'
        >
          <h2>Location List</h2>
          <ul>
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => {
                  setPosition(location);
                  setLocate(true);
                }}
                className='bg-gray-600 mt-2 mb-2'
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onLocationRemove(index);
                  }}
                  className='h-8 rounded-full bg-gray-400 pl-4 pr-4'
                >
                  Remove
                </button>
                Lat: {location.lat}, Lng: {location.lng}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LocationList;
