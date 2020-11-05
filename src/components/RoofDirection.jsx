import React, {useState} from "react";
const RoofDirection = () => {
  const [roofDirection, setRoofDirection] = useState("");
  return (
    <div>
      <h2>What's the direction of your roof?</h2>
      <input type="hidden" name="roof_direction" value={roofDirection} />
      <button
        id="northIcon"
        type="button"
        onClick={() => setRoofDirection("North")}
      >
        <img src="/images/dummylogo.png" alt="North°" />
      </button>
      <button
        id="northEastIcon"
        type="button"
        onClick={() => setRoofDirection("Noth East")}
      >
        <img src="/images/dummylogo.png" alt="North East" />
      </button>
      <button
        id="eastIcon"
        type="button"
        onClick={() => setRoofDirection("East")}
      >
        <img src="/images/dummylogo.png" alt="East" />
      </button>
      <button
        id="southEastIcon"
        type="button"
        onClick={() => setRoofDirection("South East")}
      >
        <img src="/images/dummylogo.png" alt="South East" />
      </button>
      <button
        id="southIcon"
        type="button"
        onClick={() => setRoofDirection("South")}
      >
        <img src="/images/dummylogo.png" alt="South" />
      </button>
      <button
        id="southWestIcon"
        type="button"
        onClick={() => setRoofDirection("South West")}
      >
        <img src="/images/dummylogo.png" alt="South West" />
      </button>
      <button
        id="westIcon"
        type="button"
        onClick={() => setRoofDirection("West")}
      >
        <img src="/images/dummylogo.png" alt="West" />
      </button>
      <button
        id="northWestIcon"
        type="button"
        onClick={() => setRoofDirection("North West")}
      >
        <img src="/images/dummylogo.png" alt="North West" />
      </button>
    </div>
  );
};
export default RoofDirection;
