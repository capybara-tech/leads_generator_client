import React, { useState } from "react";
import RoofDimensions from "./RoofDimensions";
import { Link as Scrolllink } from "react-scroll";

const RoofDirection = () => {
  const [roofDirection, setRoofDirection] = useState("");
  const components = [<RoofDimensions />];
  const [index, setIndex] = useState("");

  return (
    <div id="roofDirection">
      <h2>What's the direction of your roof?</h2>
      <input type="hidden" name="roof_direction" value={roofDirection} />
      <Scrolllink
        to="roofDimensions"
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
          id="northIcon"
          type="button"
          onClick={() => setRoofDirection("North")}
        >
          <img src="/images/dummylogo.png" alt="North°" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="northEastIcon"
          type="button"
          onClick={() => setRoofDirection("North East")}
        >
          <img src="/images/dummylogo.png" alt="North East" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="eastIcon"
          type="button"
          onClick={() => setRoofDirection("East")}
        >
          <img src="/images/dummylogo.png" alt="East" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="southEastIcon"
          type="button"
          onClick={() => setRoofDirection("South East")}
        >
          <img src="/images/dummylogo.png" alt="South East" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="southIcon"
          type="button"
          onClick={() => setRoofDirection("South")}
        >
          <img src="/images/dummylogo.png" alt="South" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="southWestIcon"
          type="button"
          onClick={() => setRoofDirection("South West")}
        >
          <img src="/images/dummylogo.png" alt="South West" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="westIcon"
          type="button"
          onClick={() => setRoofDirection("West")}
        >
          <img src="/images/dummylogo.png" alt="West" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
          id="northWestIcon"
          type="button"
          onClick={() => setRoofDirection("North West")}
        >
          <img src="/images/dummylogo.png" alt="North West" />
        </button>{" "}
      </Scrolllink>{" "}
      <br />
      <Scrolllink
        to="roofType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="roofDimensions"
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
export default RoofDirection;