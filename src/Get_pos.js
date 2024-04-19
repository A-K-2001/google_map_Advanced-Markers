import React, { useState } from "react";
import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";

const Get_pos=() => {
  const [pos , setpos] = useState({lat:29.905203625114094,lng: 73.87916789562323})
  const getpos = (e)=>{
    const lat = e.map.getCenter().lat()
    const lng = e.map.getCenter().lng()
    setpos({lat:lat,lng:lng})
    console.log(lat,lng)

  }
  return (
    <APIProvider apiKey={process.env.REACT_APP_MAP_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={pos}
        defaultZoom={11}
        mapId={process.env.REACT_APP_MAP_ID}
        gestureHandling={"greedy"}
        onDrag={getpos}
        disableDefaultUI={true}
      >
      <AdvancedMarker position={pos}/> 
      </Map>
    </APIProvider>
  );
};
export default Get_pos;
