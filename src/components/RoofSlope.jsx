import React, { useState } from "react";
import RoofType from "./RoofType"
import { Link as Scrolllink } from "react-scroll";

const RoofSlope = () => {
  const [roofSlope, setRoofSlope] = useState("");
  const components = [<RoofType />];
  const [index, setIndex] = useState("");

  return (
    <div id="roofSlope">
      <h2>What's the slope of your roof?</h2>
      <input type="hidden" name="roof_slope" value={roofSlope} />
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="zeroToFiveDegreesIcon"
          type="button"
          onClick={() => setRoofSlope("0-5°")}
        >
          <img src="/images/dummylogo.png" alt="0-5°" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="fiveToTwentyDegreesIcon"
          type="button"
          onClick={() => setRoofSlope("5-20°")}
        >
          <img src="/images/dummylogo.png" alt="5-20°" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="twentyToFortyDegreesIcon"
          type="button"
          onClick={() => setRoofSlope("20-40°")}
        >
          <img src="/images/dummylogo.png" alt="20-40°" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="fortyDegreesPlusIcon"
          type="button"
          onClick={() => setRoofSlope("40°+")}
        >
          <img src="/images/dummylogo.png" alt="40°+" />
        </button>
      </Scrolllink>
      <input
        component="input"
        type="number"
        placeholder="Exact roof slope"
        onChange={(e) => setRoofSlope(e.target.value)}
      ></input>
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        Next
      </Scrolllink><br />
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        Skip
      </Scrolllink>
      {components[index]}
    </div>
  );
};

export default RoofSlope;