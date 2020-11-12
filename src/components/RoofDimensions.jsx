import React, { useState } from "react";
import { Field } from "react-final-form";
import Electricity from "./Electricity";
import { Link as Scrolllink } from "react-scroll";

const RoofDimensions = () => {
  const components = [<Electricity />];
  const [index, setIndex] = useState("");

  return (
    <div id="roofDimensions">
      <h2>What's your roof dimension?</h2>
      <Field
        name="gutter_height"
        component="input"
        type="number"
        placeholder="Gutter height"
      ></Field>
      <Field
        name="roof_width"
        component="input"
        type="number"
        placeholder="Roof width"
      ></Field>
      <Field
        name="roof_length"
        component="input"
        type="number"
        placeholder="Roof length"
      ></Field>
      <Scrolllink
      id="nextToElectricity"
        to="electricity"
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
        to="roofDirection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="electricity"
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

export default RoofDimensions;