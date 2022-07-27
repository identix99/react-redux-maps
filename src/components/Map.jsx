import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  useLoadScript,
  Autocomplete
} from "@react-google-maps/api";
import Button from "react-bootstrap/Button";

export default function Mymap() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhvGoj_1s_mVBUBtNx35gyuxxpxwuf4n8",
    libraries : ["places"]
  });

  if (!isLoaded) return <p>loading....................................</p>;
  return <Map />;
}





const Map = () => {
  const center = useMemo(() => {
    return { lat: 21.181434914123617, lng: 72.82473262835249 };
  }, []);

  const [map, setmap] = useState(  /**@type google.maps.GoogleMap */ ( null));


  const marker1 = { lat: 21.169024517379064, lng: 72.84140853203593 };
  const marker2 = { lat: 21.150175384781598, lng: 72.81511339353345 };
    

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
     
      <div className="g-maps">
      <Button variant="warning" onClick={()=>{map.panTo(marker2)}}>Warning</Button>
      <Autocomplete >
        <input type="search" name="search" placeholder="enter start place" id="search" />
        </Autocomplete>
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={marker1} />
          <Marker position={marker2} />
        </GoogleMap>
      </div>
    </>
  );
};
