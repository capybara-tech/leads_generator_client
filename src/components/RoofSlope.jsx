import React, { useState } from "react";
import { Field } from "react-final-form";

const RoofSlope = () => {
  const [roofSlope, setRoofSlope] = useState("");

  const handleOnChange = event => {
    const { value } = event.target;
    setRoofSlope({ value });
  };

  return (
    <div>
      <h2>What's the slope of your roof?</h2>
      <input type="text" name="roof_slope" value={roofSlope}  />
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

      <Field component="input" type="number" placeholder="Energy consumption" onChange={handleOnChange}></Field>
    </div>
  );
};

export default RoofSlope;