import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
  const mapRef = useRef(null);
  const currentLocation = useSelector((state) => state.location.currentLocation)

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: currentLocation ?
          Number(currentLocation.coordinate.split(',')[0])
          : 0,
        lng: currentLocation ?
          Number(currentLocation.coordinate.split(',')[1]) : 0
      },
      zoom: 8,
    });

    new window.google.maps.Marker({
      position: {
        lat: currentLocation ?
          Number(currentLocation.coordinate.split(',')[0])
          : 0,
        lng: currentLocation ?
          Number(currentLocation.coordinate.split(',')[1]) : 0
      },
      map: map,
    });
  }, [currentLocation]);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default Map;