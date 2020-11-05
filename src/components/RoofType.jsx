import React, { useState } from "react";

const RoofType = () => {
  const [roofType, setRoofType] = useState("");

  return (
    <div>
      <h2>What type of roof does the property have?</h2>
      <input type="hidden" name="roof_type" value={roofType} />
      <button id="tiledIcon" type="button" onClick={() => setRoofType("tiled")}>
        <img src="/images/dummylogo.png" alt="tiled°" />
      </button>
      <button id="feltIcon" type="button" onClick={() => setRoofType("felt")}>
        <img src="/images/dummylogo.png" alt="felt" />
      </button>
      <button id="metalIcon" type="button" onClick={() => setRoofType("metal")}>
        <img src="/images/dummylogo.png" alt="metal" />
      </button>
      <button
        id="asbestosIcon"
        type="button"
        onClick={() => setRoofType("asbestos")}
      >
        <img src="/images/dummylogo.png" alt="asbestos" />
      </button>
      <button
        id="anotherIcon"
        type="button"
        onClick={() => setRoofType("another")}
      >
        <img src="/images/dummylogo.png" alt="another" />
      </button>
    </div>
  );
};

export default RoofType;