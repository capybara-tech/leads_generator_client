import React, { useState } from "react";

const RoofSlope = () => {
  const [roofSlope, setRoofSlope] = useState("");

  return (
    <div id="roofSlope">
      <h2>What's the slope of your roof?</h2>
      <input type="hidden" name="roof_slope" value={roofSlope} />
      <button
        id="zeroToFiveDegreesIcon"
        type="button"
        onClick={() => setRoofSlope("0-5°")}
      >
        <img src="/images/dummylogo.png" alt="0-5°" />
      </button>
      <button
        id="fiveToTwentyDegreesIcon"
        type="button"
        onClick={() => setRoofSlope("5-20°")}
      >
        <img src="/images/dummylogo.png" alt="5-20°" />
      </button>
      <button
        id="twentyToFortyDegreesIcon"
        type="button"
        onClick={() => setRoofSlope("20-40°")}
      >
        <img src="/images/dummylogo.png" alt="20-40°" />
      </button>
      <button
        id="fortyDegreesPlusIcon"
        type="button"
        onClick={() => setRoofSlope("40°+")}
      >
        <img src="/images/dummylogo.png" alt="40°+" />
      </button>

      <input
        component="input"
        type="number"
        placeholder="Exact roof slope"
        onChange={(e) => setRoofSlope(e.target.value)}
      ></input>
    </div>
  );
};

export default RoofSlope;