import React, { useState } from "react";
import RoofDirection from "./RoofDirection"
import { Link as Scrolllink } from "react-scroll";

const RoofType = () => {
  const [roofType, setRoofType] = useState("");
  const components = [<RoofDirection />];
  const [index, setIndex] = useState("");

  return (
    <div id="roofType">
      <h2>What type of roof does the property have?</h2>
      <input type="hidden" name="roof_type" value={roofType} />
      <Scrolllink
        to="roofDirection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button id="tiledIcon" type="button" onClick={() => setRoofType("tiled")}>
          <img src="/images/dummylogo.png" alt="tiled" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofDirection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button id="feltIcon" type="button" onClick={() => setRoofType("felt")}>
          <img src="/images/dummylogo.png" alt="felt" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofDirection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button id="metalIcon" type="button" onClick={() => setRoofType("metal")}>
          <img src="/images/dummylogo.png" alt="metal" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofDirection"
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
          id="asbestosIcon"
          type="button"
          onClick={() => setRoofType("asbestos")}
        >
          <img src="/images/dummylogo.png" alt="asbestos" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofDirection"
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
          id="anotherIcon"
          type="button"
          onClick={() => setRoofType("another")}
        >
          <img src="/images/dummylogo.png" alt="another" />
        </button>
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="roofDirection"
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

export default RoofType;