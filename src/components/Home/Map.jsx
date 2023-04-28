import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function Map() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey:
  });
  return (
    <>
      <div className=" pb-10">
        <iframe
           width="100%vw"
          height="452"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=595&amp;height=411&amp;hl=en&amp;q=sdf%2040026+(sf)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
