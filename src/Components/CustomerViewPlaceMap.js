import React, { useEffect, useState } from "react";
import CustNav from "../CustProf/CustNav";
import { useParams } from "react-router-dom";
import NoMap from "./NoMap";

function CustomerViewPlaceMap() {
  const { lat } = useParams();
  const { lon } = useParams();
  const [x,setx] = useState('')

  console.log(lat, lon);
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");

    if (lon == 0 && lat == 0) setx(<NoMap/>);
    else
    setx( (
      <iframe
        id="iframeId"
        src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
        height="500px"
        width="100%"
      ></iframe>
    ));
  },[]);

  return (
    <div>
      <CustNav />
      <div style={{ margin: "50px 30px" }}>
        {x}
      </div>
    </div>
  );
}

export default CustomerViewPlaceMap;
