import React, { useState } from "react";
import RoofSlope from "./RoofSlope";
import { Link as Scrolllink } from "react-scroll";

const PropertyType = () => {
  const [propertyType, setPropertyType] = useState("");
  const components = [<RoofSlope />];
  const [index, setIndex] = useState("");

  return (
    <div id="propertyType">
      <h2>What type of property?</h2>
      <input type="hidden" name="property_type" value={propertyType} />
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="houseIcon"
          type="button"
          onClick={() => {
            setPropertyType("house");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="house" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="apartmentIcon"
          type="button"
          onClick={() => {
            setPropertyType("apartment");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="apartment" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="terracedSemiDetachedIcon"
          type="button"
          onClick={() => {
            setPropertyType("terraced_semi_detached");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="terraced semi detached" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="barnIcon"
          type="button"
          onClick={() => {
            setPropertyType("barn");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="barn" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="commercialIcon"
          type="button"
          onClick={() => {
            setPropertyType("commercial");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="commercial" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="agriculturalIcon"
          type="button"
          onClick={() => {
            setPropertyType("agricultural");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="agricultural" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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
        className="propertyTypeIcons"
          id="otherPropertyIcon"
          type="button"
          onClick={() => {
            setPropertyType("other");
            setIndex(0);
          }}
        >
          <img className="propertyTypeIcons" src="/images/dummylogo.png" alt="other property" />
        </button>{" "}
      </Scrolllink>{" "}
      <br />
      <Scrolllink
        id="propertyTypeBack"
        to="installationDate"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="roofSlope"
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

export default PropertyType;