import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";

const My_marker = (item) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowShown, setInfowindowShown] = useState(false);
  const toggleInfoWindow = () =>
    setInfowindowShown((previousState) => !previousState);
  const closeInfoWindow = () => setInfowindowShown(false);

  return (
    <>
      <AdvancedMarker
        position={item.item.position}
        ref={markerRef}
        onClick={toggleInfoWindow}
      >
        <Pin
          background={"#FF9933"}
          glyphColor={"#FFFFFF"}
          borderColor={"#FF9933"}
        />
      </AdvancedMarker>

      {infowindowShown && (
        <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
          <h1>You can drag and drop me.</h1>
          <p>{item.item.address}</p>
        </InfoWindow>
      )}
    </>
  );
};

export default My_marker;
