import React, { useState } from "react";
import InstallationDate from "./InstallationDate";
import { Link as Scrolllink } from "react-scroll";

const PropertyType = () => {
  const [propertyType, setPropertyType] = useState("");
  const components = [<InstallationDate />];
  const [index, setIndex] = useState("");

  return (
    <div>
      <h2 id="propertyType">What type of property?</h2>
      <input type="hidden" name="property_type" value={propertyType} />
      <Scrolllink
        to="installationDate"
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
          id="houseIcon"
          type="button"
          onClick={() => {
            setPropertyType("house");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="house" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="apartmentIcon"
          type="button"
          onClick={() => {
            setPropertyType("apartment");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="apartment" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="terracedSemiDetachedIcon"
          type="button"
          onClick={() => {
            setPropertyType("terraced_semi_detached");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="terraced semi detached" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="barnIcon"
          type="button"
          onClick={() => {
            setPropertyType("barn");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="barn" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="commercialIcon"
          type="button"
          onClick={() => {
            setPropertyType("commercial");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="commercial" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="agriculturalIcon"
          type="button"
          onClick={() => {
            setPropertyType("agricultural");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="agricultural" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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
          id="otherPropertyIcon"
          type="button"
          onClick={() => {
            setPropertyType("other");
            setIndex(0);
          }}
        >
          <img src="/images/dummylogo.png" alt="other property" />
        </button>{" "}
      </Scrolllink>{" "}
      <br />
      <Scrolllink
        to="addressQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="installationDate"
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