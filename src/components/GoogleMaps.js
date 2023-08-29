import React, { useEffect } from 'react';

const GoogleMaps = () => {
  useEffect(() => {
    // Check if google.maps is already defined (script is loaded)
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // If not loaded, dynamically load the script
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCrnF-EwLfkB3E1bUY4zJndDp_hkiimgsE&callback=initMap&libraries=&v=weekly';
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  function initMap() {
    const myLatLng = {
      lat: 41.28515625,
      lng: 69.18990325927734
    };
    const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
      zoom: 14,
      center: myLatLng,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false
    });
    new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: "My location"
    });
  }

  return (
    <div id="gmp-map" style={{ height: '100%' }}>
        

    </div>
  );
};

export default GoogleMaps;
